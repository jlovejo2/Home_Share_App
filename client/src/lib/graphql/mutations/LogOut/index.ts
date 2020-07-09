import { gql } from "apollo-boost";

export const LOG_OUT = gql`
  query LogOut($input: LogInInput) {
    logOut(input: $input) {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
