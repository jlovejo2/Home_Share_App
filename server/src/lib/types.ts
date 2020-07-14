import { Collection, ObjectId } from "mongodb";

export interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  walletId?: string;
  didRequest: boolean;
}

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE",
}

export interface BookingsIndexMonth {
  [key: string]: boolean;
}

export interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

export interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  //below is one to one relationship
  host: string;
  type: ListingType;
  address: string;
  country: string;
  admin: string;
  city: string;
  bookings: ObjectId[];
  bookingsIndex: BookingsIndex;
  price: number;
  numOfGuests: number;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  //below is type string or undefined
  walletId?: string;
  income: number;
  //below is one to many relationship
  bookings: ObjectId[];
  listings: ObjectId[];
  authorized?: boolean;
}

export interface Booking {
  _id: ObjectId;
  listing: ObjectId;
  tenant: string;
  checkIn: string;
  checkOut: string;
}

export interface Database {
  listings: Collection<Listing>;
  users: Collection<User>;
  bookings: Collection<Booking>;
}

//------
//typescript generics
//----------------

//generics is a tool that exists in langauages like c# and java
//they are used to create resusable components with a variety of diff types

//<T> passes in a type variable
//when typescript does not know the type of the variable then you can not access the key value pairs or data within the variable
// interface IdentityObj<T = number> {
//   field: T;
// }

// const identity = <TData = number, TVariables = number>(arg: TData): TData => {
//   const obj: IdentityObj<TData> = {
//     field: arg,
//   };

//   return obj.field;
// };

// identity<number>(5);
