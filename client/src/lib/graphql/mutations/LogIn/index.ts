import { gql } from "apollo-boost";

export const LOG_IN = gql`
  query LogIn($input: LogInInput) {
    logIn(input: $input) {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
