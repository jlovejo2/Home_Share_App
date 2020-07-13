import merge from "lodash.merge";
import { userResolvers } from "./User";
import { viewerResolvers } from "./Viewer";

//preparing resolvers to merge multiple resolver maps
//uses lodash.merge npm

export const resolvers = merge(userResolvers, viewerResolvers);
