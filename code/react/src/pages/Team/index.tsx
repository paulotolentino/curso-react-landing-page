import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkInProgress from "../../components/WorkInProgress";

const Team: React.FC = () => {
  return (
    <div className="team">
      <Header />
      <WorkInProgress />
      <Footer />
    </div>
  );
};

export default Team;
