import { IResolvers } from "apollo-server-express";
import { Database, Listing } from "../../../lib/types";
import { ObjectId } from "mongodb";

//IResolvers is an interface that apollo server express provides for us
//resolvers map in this case is a list of obj types that contain fields or just direct fields themselves
//in those fields we define types of our arguments
//and then we specify return type of each of the functions
export const listingResolvers: IResolvers = {
  Query: {
    //third argument is (context) accessing the context parameter.
    //in root index.ts db was put into context parameter for apollo server connection which makes it accessible this way to the resolvers
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      //Promise<Listing>
      //Says this returns a promise when resolved is listing object
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete listing");
      }

      return deleteRes.value;
    },
  },

  Listing: {
    //Three below are examples of trivial resolvers.
    //A lot of graphQL libraries take care of these for you assuming to find property of same name
    // title: (listing: Listing) => listing.title,
    // image: (listing: Listing) => listing.image,
    // address: (listing: Listing) => listing.address,
    id: (listing: Listing): string => listing._id.toString(),
  },
};
