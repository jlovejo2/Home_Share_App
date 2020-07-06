import { gql } from "apollo-server-express";

//using es6 feature here called tagged template literals
//gql is a tag or function where template literal arguement is applied next to it
export const typeDefs = gql`
  type Query {
    authUrl: String!
  }

  type Mutation {
    logIn: String!
    logOut: String!
  }
`;
