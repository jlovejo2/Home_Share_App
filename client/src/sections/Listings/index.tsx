import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Layout, List } from "antd";
import { ListingCard } from "../../lib/components";
import { LISTINGS } from "../../lib/graphql/queries";
import {
  Listings as ListingsData,
  ListingsVariables,
} from "../../lib/graphql/queries/Listings/__generated__/Listings";
import { ListingsFilter } from "../../lib/graphql/globalTypes";

const { Content } = Layout;

const PAGE_LIMIT = 8;

export const Listings = () => {
  const { data } = useQuery<ListingsData, ListingsVariables>(LISTINGS, {
    variables: {
      filter: ListingsFilter.PRICE_LOW_TO_HIGH,
      limit: PAGE_LIMIT,
      page: 1,
    },
  });

  const listings = data ? data.listings : null;

  const listingsSectionElement = listings ? (
    <List
      grid={{
        gutter: 8,
        xs: 1,
        sm: 2,
        lg: 4,
      }}
      dataSource={listings.result}
      renderItem={(listings) => (
        <List.Item>
          <ListingCard listing={listings} />
        </List.Item>
      )}
    />
  ) : null;

  return <Content>{listingsSectionElement}</Content>;
};
