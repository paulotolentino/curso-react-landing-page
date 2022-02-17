import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CommentsList } from "../../components/CommentsList/index";
import "./index.css";

type HomeType = {};

const Home: React.FC<HomeType> = () => (
  <div className="home">
    <Header />
    <CommentsList />
    <Footer />
  </div>
);

export default Home;
