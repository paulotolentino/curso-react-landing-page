import React from "react";

import { CommentsList } from "../../components/CommentsList/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainPage from "../../components/MainPage";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <MainPage />
      <CommentsList />
      <Footer />
    </div>
  );
};

export default Home;
