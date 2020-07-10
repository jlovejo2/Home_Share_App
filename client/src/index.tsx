import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Layout, Affix } from "antd";
import {
  AppHeader,
  Home,
  Host,
  Login,
  Listing,
  Listings,
  NotFound,
  User,
} from "./sections";
import { Viewer } from "./lib/types";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

//create client constructor
const client = new ApolloClient({
  //basically telling apollo where to find graphql
  uri: "http://localhost:9000/api",
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
};
const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  console.log(viewer);

  return (
    <Router>
      <Layout id="app">
        {/*Affix is a component from ant design that makes what is wrapped to it be a fixed position */}
        <Affix offsetTop={0}>
          <AppHeader viewer={viewer} />
        </Affix>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setViewer={setViewer} />}
          />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
