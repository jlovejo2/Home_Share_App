import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, InputNumber, Layout, Radio, Typography } from "antd";
import { Viewer } from "../../lib/types";
import { ListingType } from "../../lib/graphql/globalTypes";
import { Icon } from "@ant-design/compatible";
import { iconColor } from "../../lib/utils";

interface Props {
  viewer: Viewer;
}

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;

export const Host = ({ viewer }: Props) => {
  if (!viewer.id || !viewer.hasWallet) {
    return (
      <Content className="host-content">
        <div className="host__form-header">
          <Title level={4} className="host__form-title">
            You'll have to be signed in and connected with Stripe to host a
            listing!
          </Title>
          <Text type="secondary">
            We only allow users who've signed in to our application and have
            connected with STripe to hose new listings. You can sing in at the{" "}
            <Link to="/login">/login</Link> page and connect with Stripe shortly
            after.
          </Text>
        </div>
      </Content>
    );
  }

  return (
    <Content className="host-content">
      <Form layout="vertical">
        <div className="host__form-header">
          <Title level={3} className="host__form-title">
            Hi! Let's get start listing your place.
          </Title>
          <Text type="secondary">
            In this form, we'll collect some basic and additional information
            about your listing.
          </Text>
        </div>
        <Item label="Home Type">
          <Radio.Group>
            <Radio.Button value={ListingType.APARTMENT}>
              <Icon type="bank" style={{ color: iconColor }} />
              <span>Apartment</span>
            </Radio.Button>
            <Radio.Button value={ListingType.HOUSE}>
              <Icon type="home" style={{ color: iconColor }} />
              <span>House</span>
            </Radio.Button>
          </Radio.Group>
        </Item>
        <Item label="Title" extra="Max character count of 45">
          <Input placeholder="The iconic and luxurious Bel-Air mansion" />
        </Item>
        <Item label="Description of listing" extra="Max character count of 45">
          <Input.TextArea
            rows={3}
            maxLength={400}
            placeholder="Modern, clean, and iconic home of the Fresh Prince.  Sits in the heart of Bel-Air, Los Angeles."
          />
        </Item>
        <Item label="Address">
          <Input placeholder="251 N Bristol Ave" />
        </Item>
        <Item label="City/Town">
          <Input placeholder="Los Angeles" />
        </Item>
        <Item label="State/Province">
          <Input placeholder="California" />
        </Item>
        <Item label="Zip/Postal Code">
          <Input placeholder="Please enter a zip code for your listing" />
        </Item>
        <Item label="Price" extra="All prices in $USD/day">
          <InputNumber min={0} placeholder="120" />
        </Item>
      </Form>
    </Content>
  );
};
