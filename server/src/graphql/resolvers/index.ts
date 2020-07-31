import merge from "lodash.merge";
import { bookingsResolver } from "./Booking";
import { listingsResolver } from "./Listing";
import { userResolvers } from "./User";
import { viewerResolvers } from "./Viewer";

//preparing resolvers to merge multiple resolver maps
//uses lodash.merge npm

export const resolvers = merge(
  bookingsResolver,
  listingsResolver,
  userResolvers,
  viewerResolvers
);
