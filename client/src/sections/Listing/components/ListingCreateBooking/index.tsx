import React from "react";
import { Card, Button, DatePicker, Divider, Typography } from "antd";
import moment, { Moment } from "moment";
import { displayErrorMessage, formatListingPrice } from "../../../../lib/utils";
import { Viewer } from "../../../../lib/types";
import { Listing as ListingData } from "../../../../lib/graphql/queries/Listing/__generated__/Listing";

const { Paragraph, Title, Text } = Typography;

interface Props {
  viewer: Viewer;
  host: ListingData["listing"]["host"];
  price: number;
  checkInDate: Moment | null;
  checkOutDate: Moment | null;
  setCheckInDate: (checkInDate: Moment | null) => void;
  setCheckOutDate: (checkOutDate: Moment | null) => void;
}
export const ListingCreateBooking = ({
  viewer,
  host,
  price,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
}: Props) => {
  const disabledDate = (currentDate?: Moment) => {
    if (currentDate) {
      const dateIsBeforeEndOfDay = currentDate.isBefore(moment().endOf("day"));

      return dateIsBeforeEndOfDay;
    } else {
      return false;
    }
  };

  const verifyAndSetCheckOutDate = (selectedCheckOutDate: Moment | null) => {
    if (checkInDate && selectedCheckOutDate) {
      if (moment(selectedCheckOutDate).isBefore(checkInDate, "days")) {
        return displayErrorMessage(
          `You can't book date of check out to be prior to check in.`
        );
      }
      setCheckOutDate(selectedCheckOutDate);
    }
  };

  const viewerIsHost = viewer.id === host.id;
  const checkInInputDisabled = !viewer.id || viewerIsHost;
  const checkOutInputDisabled = checkInInputDisabled || !checkInDate;
  const buttonDisabled = checkInInputDisabled || !checkInDate || !checkOutDate;

  let buttonMessage = "You won't be charged yet";
  if (!viewer.id) {
    buttonMessage = "You have to be signed in to book a listing!";
  } else if (viewerIsHost) {
    buttonMessage = "You can't book your own listing!";
  }
  return (
    <div className="listing-booking">
      <Card className="listing-booking__card">
        <div>
          <Paragraph>
            <Title level={2} className="listing-booking__card-title">
              {formatListingPrice(price)}
              <span>/day</span>
            </Title>
          </Paragraph>
          <Divider />
          <div className="listing-booking__card-date-picker">
            <Paragraph strong>Check In</Paragraph>
            <DatePicker
              value={checkInDate}
              onChange={(dateValue) => setCheckInDate(dateValue)}
              showToday={false}
              format={"YYYY/MM/DD"}
              disabled={checkInInputDisabled}
              disabledDate={disabledDate}
              onOpenChange={() => setCheckOutDate(null)}
            />
          </div>
          <div className="listing-booking__card-date-picker">
            <Paragraph strong>Check Out</Paragraph>
            <DatePicker
              value={checkOutDate}
              onChange={(dateValue) => verifyAndSetCheckOutDate(dateValue)}
              showToday={false}
              format={"YYYY/MM/DD"}
              disabled={checkOutInputDisabled}
              disabledDate={disabledDate}
            />
          </div>
        </div>
        <Divider />
        <Button
          disabled={buttonDisabled}
          size="large"
          type="primary"
          className="listing-booking__card-cta"
        >
          Request to book!
        </Button>
        <Text type="secondary" mark>
          {buttonMessage}
        </Text>
      </Card>
    </div>
  );
};
