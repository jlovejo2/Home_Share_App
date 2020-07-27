import React, { Fragment } from "react";
import { Empty, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

export const NotFound = () => {
  return (
    <Content className="not-found">
      <Empty
        description={
          <Fragment>
            <Text className="not-found__desription-title">
              Uh oh! Something went wrong :(
            </Text>
            <hr />
            <Text className="not-found__description-subtitle">
              The page you're looking for can't be found
            </Text>
          </Fragment>
        }
      />
    </Content>
  );
};
