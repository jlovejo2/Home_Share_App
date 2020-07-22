import React from "react";
import { Modal, Button, Divider, Typography } from "antd";
import { Icon } from "@ant-design/compatible";
import moment, { Moment } from "moment";
import { formatListingPrice } from "../../../../lib/utils";

interface Props {
  price: number;
  checkInDate: Moment;
  checkOutDate: Moment;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

const { Paragraph, Text, Title } = Typography;

export const ListingCreateBookingModal = ({
  price,
  checkInDate,
  checkOutDate,
  modalVisible,
  setModalVisible,
}: Props) => {
  const daysBooked = checkOutDate.diff(checkInDate, "days") + 1;
  const listingPrice = price * daysBooked;
  const tinyHouseFee = 0.05 * listingPrice;
  const totalPrice = listingPrice + tinyHouseFee;

  return (
    <Modal
      visible={modalVisible}
      centered
      footer={null}
      onCancel={() => setModalVisible(false)}
    >
      <div className="listing-booking-modal">
        <div className="listing-booking-modal__intro">
          <Title className="listing-booking-modal__intro-title">
            <Icon type="key"></Icon>
          </Title>
          <Title level={3} className="listing-booking-modal__intro-title">
            Book your trip
          </Title>
          <Paragraph>
            Enter your payment information to book the listing from the dates
            between{" "}
            <Text strong mark>
              {moment(checkInDate).format("MMMM Do YYYY")}
            </Text>{" "}
            and{" "}
            <Text strong mark>
              {moment(checkOutDate).format("MMMM Do YYYY")}
            </Text>
            , inclusive.
          </Paragraph>
        </div>

        <Divider />

        <div className="listing-booking-modal__charge-summary">
          <Paragraph>
            {formatListingPrice(price, false)} * {daysBooked} days ={" "}
            <Text strong>{formatListingPrice(listingPrice, false)}</Text>
          </Paragraph>
          <Paragraph>
            Tinyhouse Fee <sub>~ 5%</sub> ={" "}
            <Text strong>{formatListingPrice(tinyHouseFee)}</Text>
          </Paragraph>
          <Paragraph>
            Total = <Text mark>{formatListingPrice(totalPrice)}</Text>
          </Paragraph>
        </div>

        <Divider />
        <div className="listing-booking-modal__stripe-card-section">
          <Button
            type="primary"
            size="large"
            className="listing-booking-modal__cta"
          >
            Book
          </Button>
        </div>
      </div>
    </Modal>
  );
};
