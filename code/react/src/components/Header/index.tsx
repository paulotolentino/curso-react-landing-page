import React, { useState } from "react";
import { PageHeader, Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import "./index.css";

type HeaderProps = {};

const { TabPane } = Tabs;

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const changePage = (key: String) => {
    navigate(`/${key}`, {replace:true});
    return;
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
          defaultActiveKey={path}
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
