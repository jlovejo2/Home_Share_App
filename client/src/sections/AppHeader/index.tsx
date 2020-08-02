import React, { useState, useEffect } from "react";
import {
  Link,
  RouteComponentProps,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Input, Layout } from "antd";
import { MenuItems } from "./components";
//importing viewer interface
import { Viewer } from "../../lib/types";
import logo from "./assets/houseShare_logo.png";
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
//removed withRouter() because of release of useHistory() hook from react
export const AppHeader = ({ viewer, setViewer }: Props) => {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation<RouteComponentProps>();
  const history = useHistory<RouteComponentProps>();

  useEffect(() => {
    //react router obj location gives us url at any time
    //withRouter does this too with location and history
    //can't use match object because it is only route relative. Any only can use nearest route

    const pathnameSubStrings = pathname.split("/");

    if (!pathname.includes("/listings")) {
      setSearch("");
      return;
    }

    if (pathname.includes("/listings") && pathnameSubStrings.length === 3) {
      setSearch(pathnameSubStrings[2]);
      return;
    }
  }, [pathname]);

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
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
            onSearch={onSearch}
          />
        </div>
      </div>
      <div className="app-header__menu-section">
        <MenuItems viewer={viewer} setViewer={setViewer} />
      </div>
    </Header>
  );
};
