import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Layout, Typography } from "antd";
import { Viewer } from "../../lib/types";

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
      </Form>
    </Content>
  );
};
