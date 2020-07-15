import { IResolvers } from "apollo-server-express";
import { Listing } from "../../../lib/types";

export const listingsResolver: IResolvers = {
  Query: {
    listing: () => {
      return "Query.listing";
    },
  },
  Listing: {
    id: (listing: Listing): string => {
      return listing._id.toString();
    },
  },
};
