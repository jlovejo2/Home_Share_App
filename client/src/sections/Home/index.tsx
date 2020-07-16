import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import { displayErrorMessage } from "../../lib/utils";
import { HomeHero } from "./components";

import mapBackground from "./assets/map-background.jpg";

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export const Home = ({ history }: RouteComponentProps) => {
  const onSearch = (value: String) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      history.push(`/listings/${trimmedValue}`);
    } else {
      displayErrorMessage("Please enter a valid search.");
    }
  };

  return (
    <Content
      className="home"
      style={{ backgroundImage: `url(${mapBackground})` }}
    >
      <HomeHero onSearch={onSearch} />
      <div className="home__cta-section">
        <Title>Your guide for all things rental</Title>
        <Paragraph>
          Helping you make your best decisions in renting your last minute
          locations.
        </Paragraph>
        <Link
          to="/listings/united%20states"
          className="ant-btn ant-btn-primary ant-btn-lg home__cta-section-button"
        >
          Popular listings in the United States
        </Link>
      </div>
    </Content>
  );
};
