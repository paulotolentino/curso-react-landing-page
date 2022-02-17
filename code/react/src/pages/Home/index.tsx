import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CommentsList } from "../../components/CommentsList/index";

type HomeType = {};

const Home: React.FC<HomeType> = () => (
  <>
    <Header />
    <CommentsList />
    <Footer />
  </>
);

export default Home;
