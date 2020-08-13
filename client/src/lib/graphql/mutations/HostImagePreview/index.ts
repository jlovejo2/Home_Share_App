import { gql } from "apollo-boost";

export const HOST_IMAGE_PREVIEW = gql`
  mutation HostImagePreview($input: PreviewListingInput!) {
    hostImagePreview(input: $input) {
      id
    }
  }
`;
