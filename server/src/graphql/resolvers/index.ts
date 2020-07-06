import merge from "lodash.merge";
import { viewerResolvers } from "./Viewer";

//preparing resolvers to merge multiple resolver maps
//uses lodash.merge npm

export const resolvers = merge(viewerResolvers);
