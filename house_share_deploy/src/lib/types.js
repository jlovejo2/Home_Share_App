"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListingType;
(function (ListingType) {
    ListingType["Apartment"] = "APARTMENT";
    ListingType["House"] = "HOUSE";
})(ListingType = exports.ListingType || (exports.ListingType = {}));
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
