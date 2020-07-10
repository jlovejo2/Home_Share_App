import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { MenuItems } from "./components";
//importing viewer interface
import { Viewer } from "../../lib/types";
import logo from "./assets/tinyhouse-logo.png";

interface Props {
  viewer: Viewer;
}

const { Header } = Layout;

export const AppHeader = ({ viewer }: Props) => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Link to="/">
            <img src={logo} alt="App logo" />
          </Link>
        </div>
      </div>
      <div className="app=header__menu-section">
        <MenuItems viewer={viewer} />
      </div>
    </Header>
  );
};
