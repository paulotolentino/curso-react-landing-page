import React from "react";
import { PageHeader } from "antd";
import "./index.css";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="The Best React Course Ever"
      avatar={{
        src: "https://avatars.githubusercontent.com/u/39895671?v=4",
      }}
    />
  );
};

export default Header;
