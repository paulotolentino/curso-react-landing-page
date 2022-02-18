import React from "react";
import { PageHeader, Tabs } from "antd";
import { useTranslation } from "react-i18next";
import "./index.css";

type HeaderProps = {};

const { TabPane } = Tabs;

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <PageHeader
      className="site-page-header"
      title={t("header.siteName")}
      avatar={{
        src: "https://avatars.githubusercontent.com/u/39895671?v=4",
      }}
      extra={
        <Tabs defaultActiveKey="1" className="header-nav-tabs">
          <TabPane tab={t("header.tab1")} key="1" />
          <TabPane tab={t("header.tab2")} key="2" />
          <TabPane tab={t("header.tab3")} key="3" />
          <TabPane tab={t("header.tab4")} key="4" />
        </Tabs>
      }
    />
  );
};

export default Header;
