import { IResolvers } from "apollo-server-express";
import { Request } from "express";
import { ObjectId } from "mongodb";
import { Database, Listing, Booking, BookingsIndex } from "../../../lib/types";
import { CreateBookingArgs } from "./types";
import { authorize } from "../../../lib/utils";
import { Stripe } from "../../../lib/api";

const resolveBookingsIndex = (
  bookingsIndex: BookingsIndex,
  checkInDate: string,
  checkOutDate: string
): BookingsIndex => {
  let dateCursor = new Date(checkInDate);
  let checkOut = new Date(checkOutDate);
  const newBookingsIndex: BookingsIndex = { ...bookingsIndex };

  //executes code over and over given a valid boolean condition
  while (dateCursor <= checkOut) {
    const y = dateCursor.getUTCFullYear(); //2019 universal time
    const m = dateCursor.getUTCMonth(); // 0
    const d = dateCursor.getUTCDate(); // 1

    if (!newBookingsIndex[y]) {
      newBookingsIndex[y] = {};
    }
    if (!newBookingsIndex[y][m]) {
      newBookingsIndex[y][m] = {};
    }
    if (!newBookingsIndex[y][m][d]) {
      newBookingsIndex[y][m][d] = true;
    } else {
      throw new Error(
        "selected dates can't overlap dates that have already been booked"
      );
    }

    dateCursor = new Date(dateCursor.getTime() + 86400000);
  }
};

export const bookingsResolver: IResolvers = {
  Booking: {
    id: (booking: Booking): string => {
      return booking._id.toString();
    },
    listing: (
      booking: Booking,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      return db.listings.findOne({
        _id: booking.listing,
      });
    },
  },
  Mutation: {
    createBooking: async (
      _root: undefined,
      { input }: CreateBookingArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Booking> => {
      try {
        const { id, source, checkIn, checkOut } = input;

        // verify a logged in user is making request
        const viewer = await authorize(db, req);

        if (!viewer) {
          throw new Error("viewer cannot be found");
        }
        // find listing document that is being booked
        const listing = await db.listings.findOne({
          _id: new ObjectId(id),
        });
        if (!listing) {
          throw new Error("listing can't be found");
        }
        // check that viewer is NOT booking their own listing
        if (listing.host === viewer._id) {
          throw new Error("viewer can't book own listing");
        }
        // check that checkOut is NOT before checkIn
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        if (checkOutDate < checkInDate) {
          throw new Error("check out date can't be before check in date");
        }
        // create a new bookingsIndex for listing being booked
        const bookingsIndex = resolveBookingsIndex(
          listing.bookingsIndex,
          checkIn,
          checkOut
        );

        //get total price to charge
        const totalPrice =
          listing.price *
          ((checkOutDate.getTime() - checkInDate.getTime()) / 86400000 + 1);

        // get user document of host or listing
        const host = await db.users.findOne({
          _id: listing.host,
        });

        if (!host || !host.walletId) {
          throw new Error(
            "the host either can't be found or is not connected with Stripe"
          );
        }

        // create Stripe charge on behalf of host
        await Stripe.charge(totalPrice, source, host.walletId);

        // insert a new booking document to bookings collection
        const insertRes = await db.bookings.insertOne({
          _id: new ObjectId(),
          listing: listing._id,
          tenant: viewer._id,
          checkIn,
          checkOut,
        });

        const insertedBooking: Booking = insertRes.ops[0];

        // update user document of host to increment income
        await db.users.updateOne(
          {
            _id: host._id,
          },
          { $inc: { income: totalPrice } }
        );
        // update bookings field of tenant
        await db.users.updateOne(
          {
            _id: viewer._id,
          },
          { $push: { bookings: insertedBooking._id } }
        );
        // update bookings field of listing document
        await db.listings.updateOne(
          {
            _id: listing._id,
          },
          {
            $set: { bookingsIndex },
            $push: { bookings: insertedBooking._id },
          }
        );

        // return newly insert booking
        return insertedBooking;
      } catch (error) {
        throw new Error(`Failed to create a booking.: ${error}`);
      }
    },
  },
};
