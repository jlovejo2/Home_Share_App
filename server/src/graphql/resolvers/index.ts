import merge from "lodash.merge";
import { listingResolvers } from "./Listing";

//preparing resolvers to merge multiple resolver maps
//uses lodash.merge npm

export const resolvers = merge(listingResolvers);
