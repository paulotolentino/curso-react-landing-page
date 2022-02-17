import React from "react";
import { Row } from "antd";
import { useTranslation } from "react-i18next";

import { Table, Table2Columns, AddMargin, MainCard } from "./home.main.styles";
import { CommentsList } from "../../components/CommentsList/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type HomeType = {};

const Home: React.FC<HomeType> = () => {
  const { t } = useTranslation();

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("TODO");
  };

  return (
    <div className="home">
      <Header />
      <AddMargin>
        <h1>{t("title")}</h1>
        <hr />
        <Table>
          <Table2Columns>
            <AddMargin>
              <h1>{t("main.title")}</h1>
              <h3>{t("main.description")}</h3>
            </AddMargin>
          </Table2Columns>
          <Table2Columns>
            <MainCard>
              <button onClick={handleSignUp}>{t("main.signup")}</button>
            </MainCard>
          </Table2Columns>
        </Table>
        <hr />
      </AddMargin>
      <CommentsList />
      <Footer />
    </div>
  );
};

export default Home;
