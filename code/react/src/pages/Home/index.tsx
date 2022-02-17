import React from "react";
import { Row } from "antd";

import { CommentsList } from "../../components/CommentsList/index";

type HomeType = {};

const Home: React.FC<HomeType> = () => {
  return (
    <>
      <Row>HOME</Row>
      <CommentsList />
    </>
  );
};

export default Home;
