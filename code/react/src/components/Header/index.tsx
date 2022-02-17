import React from "react";
import { PageHeader, Tabs } from "antd";
import "./index.css";

type HeaderProps = {};

const { TabPane } = Tabs;

const Header: React.FC<HeaderProps> = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="The Best React Course Ever"
      avatar={{
        src: "https://avatars.githubusercontent.com/u/39895671?v=4",
      }}
      extra={
        <Tabs defaultActiveKey="1" className="header-nav-tabs">
          <TabPane tab="Home" key="1" />
          <TabPane tab="Team" key="2" />
          <TabPane tab="Discover" key="3" />
          <TabPane tab="Program" key="4" />
        </Tabs>
      }
    />
  );
};

export default Header;
