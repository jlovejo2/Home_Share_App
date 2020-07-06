import { MongoClient } from "mongodb";
import { Database, User, Listing, Booking } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

//Promise<> declares the type of the the whole return function as a promise that when resolved be an object of type database
//Database function is asynchronous.
export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("main");

  return {
    //could have declared type of collection individually
    //adding the user type as import and adding it as type for db.collection function it ensures data is returned as it should be
    users: db.collection<User>("users"),
    listings: db.collection<Listing>("listings"),
    bookings: db.collection<Booking>("bookings"),
  };
};
