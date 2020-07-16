import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout } from "antd";
import { displayErrorMessage } from "../../lib/utils";
import { HomeHero } from "./components";

import mapBackground from "./assets/map-background.jpg";

const { Content } = Layout;

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
    </Content>
  );
};
