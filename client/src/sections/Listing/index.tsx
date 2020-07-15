import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { PageSkeleton, ErrorBanner } from "../../lib/components";
import { Layout } from "antd";
import { LISTING } from "../../lib/graphql/queries";
import {
  Listing as ListingData,
  ListingVariables,
} from "../../lib/graphql/queries/Listing/__generated__/Listing";
import { Listings } from "../Listings";

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 3;

const { Content } = Layout;

export const Listing = ({ match }: RouteComponentProps<MatchParams>) => {
  const [bookingsPage, setBookingsPage] = useState(1);
  const { data, loading, error } = useQuery<ListingData, ListingVariables>(
    LISTING,
    {
      variables: {
        id: match.params.id,
        bookingsPage,
        limit: PAGE_LIMIT,
      },
    }
  );

  if (loading) {
    return (
      <Content className="listings">
        <PageSkeleton />
      </Content>
    );
  }

  if (error) {
    return (
      <Content>
        <ErrorBanner description="This listing may not exist or we encountered an error. Please try again soon." />
        <PageSkeleton />
      </Content>
    );
  }

  const listing = data ? data.listing : null;
  const listingBookings = listing ? listing.bookings : null;

  return <h2>Listing</h2>;
};
