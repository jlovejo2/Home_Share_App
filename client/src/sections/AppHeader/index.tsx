import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Input, Layout } from "antd";
import { MenuItems } from "./components";
//importing viewer interface
import { Viewer } from "../../lib/types";
import logo from "./assets/tinyhouse-logo.png";
import { displayErrorMessage } from "../../lib/utils";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const { Header } = Layout;
const { Search } = Input;

//using withRouter() function that wraps AppHeader component here
//this is being done because I needed access to history for history.push() but AppHeader was not a apart of the Routes in root index.tsx
//therefore it did not just have access to it so I need to use withRouter()
export const AppHeader = withRouter(
  ({ viewer, setViewer, history }: Props & RouteComponentProps) => {
    const onSearch = (value: string) => {
      const trimmedValue = value.trim();

      if (trimmedValue) {
        history.push(`/listings/${trimmedValue}`);
      } else {
        displayErrorMessage("Please enter a valid search");
      }
    };

    return (
      <Header className="app-header">
        <div className="app-header__logo-search-section">
          <div className="app-header__logo">
            <Link to="/">
              <img src={logo} alt="App logo" />
            </Link>
          </div>
          <div className="app-header__search-input">
            <Search
              placeholder="Search 'San Francisco'"
              enterButton
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="app=header__menu-section">
          <MenuItems viewer={viewer} setViewer={setViewer} />
        </div>
      </Header>
    );
  }
);
