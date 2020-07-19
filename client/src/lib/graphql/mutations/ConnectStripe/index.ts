import { gql } from "apollo-boost";

export const CONNECT_STRIPE = gql`
  mutation ConnectStripe($input: ConnectStripeInput!) {
    ConnectStripe(input: $input) {
      hasWallet
    }
  }
`;
