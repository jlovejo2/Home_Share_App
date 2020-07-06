import { Collection, ObjectId } from "mongodb";

export interface Listing {
  _id: ObjectId;
}

export interface User {
  _id: ObjectId;
}

export interface Booking {
  _id: ObjectId;
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
