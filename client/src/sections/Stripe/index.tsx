import React, { useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { Layout, Spin } from "antd";
import { CONNECT_STRIPE } from "../../lib/graphql/mutations";
import {
  ConnectStripe as ConnectStripeData,
  ConnectStripeVariables,
} from "../../lib/graphql/mutations/ConnectStripe/__generated__/ConnectStripe";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
}

const { Content } = Layout;

export const Stripe = ({ viewer }: Props) => {
  const [connectStripe, { data, loading, error }] = useMutation<
    ConnectStripeData,
    ConnectStripeVariables
  >(CONNECT_STRIPE);

  const connectStripeRef = useRef(connectStripe);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (!code) {
      throw new Error("Code null from stripe account");
    }

    connectStripeRef.current({
      variables: {
        input: { code },
      },
    });
  }, []);

  if (loading) {
    return (
      <Content className="stripe">
        <Spin size="large" tip="Connecting your Stripe account..." />
      </Content>
    );
  }

  if (error) {
    return <Redirect to={`/user/${viewer.id}?strip_error=true`} />;
  }
};
