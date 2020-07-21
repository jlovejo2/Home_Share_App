import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useMutation } from "react-apollo";
import { Layout, Affix, Spin } from "antd";
import {
  AppHeader,
  Home,
  Host,
  Login,
  Listing,
  Listings,
  NotFound,
  Stripe,
  User,
} from "./sections";
import { AppHeaderSkeleton, ErrorBanner } from "./lib/components";
import { LOG_IN } from "./lib/graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "./lib/graphql/mutations/LogIn/__generated__/LogIn";
import { Viewer } from "./lib/types";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

//create client constructor
const client = new ApolloClient({
  //basically telling apollo where to find graphql
  uri: "/api",
  request: async (operation) => {
    const token = sessionStorage.getItem("token");
    //using the token || "" for x csrf token because it is generated once the user logs in.
    //so at begining it does exist and an empty string is set to the csrf header instead if token doesn't exist yet in session storage.
    operation.setContext({
      headers: {
        "X-CSRF-TOKEN": token || "",
      },
    });
  },
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
  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn);

        if (data.logIn.token) {
          sessionStorage.setItem("token", data.logIn.token);
        } else {
          sessionStorage.removeItem("token");
        }
      }
    },
  });

  const logInRef = useRef(logIn);

  useEffect(() => {
    logInRef.current();
  }, []);

  //if the mutation doesnt show errors or the login request is not completed in some way display a spinner
  if (!viewer.didRequest && !error) {
    return (
      <Layout className="app-skeleton">
        <AppHeaderSkeleton />
        <div className="app-skeleton_spinner">
          <Spin size="large" tip="Launching Tinyhouse" />
        </div>
      </Layout>
    );
  }

  const LogInErrorBannerElement = error ? (
    <ErrorBanner description="We weren't able to verify your log in.  Please try again later." />
  ) : null;
  return (
    <Router>
      <Layout id="app">
        {LogInErrorBannerElement}
        {/*Affix is a component from ant design that makes what is wrapped to it be a fixed position */}
        <Affix offsetTop={0}>
          <AppHeader viewer={viewer} setViewer={setViewer} />
        </Affix>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/host"
            render={(props) => <Host {...props} viewer={viewer} />}
          />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setViewer={setViewer} />}
          />
          <Route
            exact
            path="/stripe"
            render={(props) => (
              <Stripe {...props} viewer={viewer} setViewer={setViewer} />
            )}
          />
          <Route
            exact
            path="/user/:id"
            render={(props) => (
              <User {...props} viewer={viewer} setViewer={setViewer} />
            )}
          />
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
