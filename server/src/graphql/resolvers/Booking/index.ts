import { IResolvers } from "apollo-server-express";
import { Request } from "express";
import { Database, Listing, Booking } from "../../../lib/types";
import { CreateBookingArgs } from "./types";

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
    createBooking: (
      _root: undefined,
      { input }: CreateBookingArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Booking> => {
      try {
        const { id, source, checkIn, checkOut } = input;

        // verify a logged in user is making request

        // find listing document that is being booked

        // check that viewer is NOT booking their own listing

        // check that checkOut is NOT before checkIn

        // create a new bookingsIndex for listing being booked

        //get total price to charge

        // get user document of host or listing

        // create Stripe charge on behalf of host

        // insert a new booking document to cookings collection

        // update user document of host to increment income

        // update bookings field of tenant

        // update bookings field of listing document

        // return newly insert booking
      } catch (error) {
        throw new Error(` : ${error}`);
      }
    },
  },
};
