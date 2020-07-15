import React from "react";
import { Card, Typography } from "antd";
import { Icon } from "@ant-design/compatible";

interface Props {
  listing: {
    id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
  };
}

const { Text, Title } = Typography;

export const ListingCard = ({ listing }: Props) => {
  const { title, image, address, price, numOfGuests } = listing;

  return (
    <Card
      hoverable
      cover={
        <div
          className="listing-card__cover-img"
          style={{ backgroundImage: `url(${image})` }}
        />
      }
    >
      <div className="listing-card__details">
        <div className="listing-card__description">
          <Title level={4} className="listing-card__price">
            {price}
            <span>/day</span>
          </Title>
          <Text strong ellipsis className="listing-card__title">
            {title}
          </Text>
          <Text strong ellipsis className="listing-card__address">
            {address}
          </Text>
        </div>
        <div className="listing-card__dimensions listing-card__dimensions--guest">
          <Icon type="user" />
          <Text>{numOfGuests} guests</Text>
        </div>
      </div>
    </Card>
  );
};
