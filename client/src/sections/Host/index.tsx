import React from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Text, Title } = Typography;

export const Host = () => {
  return (
    <Content className="host-content">
      <div className="host__form-header">
        <Title level={3} className="host__form-title">
          Hi! Let's get start listing your place.
          <Text type="secondary">
            In this form, we'll collect some basic and additional information
            about your listing.
          </Text>
        </Title>
      </div>
    </Content>
  );
};
