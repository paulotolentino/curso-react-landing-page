import React from "react";
import { PageHeader, Tabs } from "antd";
import { useTranslation } from "react-i18next";

import "./index.css";

type HeaderProps = {};

const { TabPane } = Tabs;

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  const changePage = (key: String) => {
    switch (key) {
      case "home":
        return;
      case "team":
        return;
      case "students":
        return;
      case "program":
        return;
      default:
        return;
    }
  };

  return (
    <PageHeader
      className="site-page-header"
      title={t("header.siteName")}
      avatar={{
        src: "https://avatars.githubusercontent.com/u/39895671?v=4",
      }}
      extra={
        <Tabs
          defaultActiveKey="home"
          className="header-nav-tabs"
          onTabClick={changePage}
        >
          <TabPane tab={t("header.tab1")} key="home" />
          <TabPane tab={t("header.tab2")} key="team" />
          <TabPane tab={t("header.tab3")} key="students" />
          <TabPane tab={t("header.tab4")} key="program" />
        </Tabs>
      }
    />
  );
};

export default Header;
