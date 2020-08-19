"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Booking_1 = require("./Booking");
const Listing_1 = require("./Listing");
const User_1 = require("./User");
const Viewer_1 = require("./Viewer");
//preparing resolvers to merge multiple resolver maps
//uses lodash.merge npm
exports.resolvers = lodash_merge_1.default(Booking_1.bookingsResolver, Listing_1.listingsResolver, User_1.userResolvers, Viewer_1.viewerResolvers);
