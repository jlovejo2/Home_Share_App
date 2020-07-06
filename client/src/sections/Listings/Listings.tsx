import React /* FunctionComponent */ from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo";
import { Listings as ListingsData } from "./__generated__/Listings";
import {
  DeleteListing as DeleteListingData,
  DeleteListingVariables,
} from "./__generated__/DeleteListing";
import { Alert, List, Avatar, Button, Spin } from "antd";
import { ListingsSkeleton } from "./components";
import "./styles/Listing.css";

//need the gql tag when passing the graphql query into apollo
//apollo expects the queries to be trees and not strings
const LISTINGS = gql`
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

//This is a component set up as a function that simply returns jsx
export const Listings = ({ title }: Props) => {
  //custom hook that is combining useState and useEffect to query for listings
  const { data, refetch, loading, error } = useQuery<ListingsData>(LISTINGS);

  const [
    deleteListing,
    //es6 allowing ability to rename destructured variables
    { loading: deleteListingLoading, error: deleteListingError },
  ] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

  const handleDeleteListing = async (id: string) => {
    //had to change this when going to apollo because the each hook accepts and options object where variables is just one option that we can apply
    await deleteListing({ variables: { id } });

    refetch();
  };

  const listings = data ? data.listings : null;

  const listingsList = listings ? (
    <List
      itemLayout="horizontal"
      dataSource={listings}
      renderItem={(listing) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              onClick={() => handleDeleteListing(listing.id)}
            >
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={listing.title}
            description={listing.address}
            avatar={<Avatar src={listing.image} shape="square" size={48} />}
          />
        </List.Item>
      )}
    />
  ) : null;

  if (loading) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} error />
      </div>
    );
  }

  // const deleteListingLoadingMessage = deleteListingLoading ? (
  //   <h4>Deletion in progress...</h4>
  // ) : null;

  const deleteListingErrorAlert = deleteListingError ? (
    <Alert
      type="error"
      message="Uh oh! Something went wrong with deleteing - please try again later</h4>
      "
      className="listings_alert"
    />
  ) : null;

  // const deleteListingErrorMessage = deleteListingError ? (
  //   <h4>Uh oh! Something went wrong with deleteing - please try again later</h4>
  // ) : null;

  return (
    <div className="listings">
      <Spin spinning={deleteListingLoading}>
        {deleteListingErrorAlert}
        <h2>{title}</h2>
        {listingsList}
      </Spin>
    </div>
  );
};

//This way of declaring functional component interface
//most helpful when want to use and specific unique information in our components
// export const Listings2: FunctionComponent<Props> = ({ title, children }) => {
//   return <h2>{title}</h2>;
// };
