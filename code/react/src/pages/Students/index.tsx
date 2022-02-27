import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StudentList from "../../components/StudentsList";

const Students: React.FC = () => {
  return (
    <div className="students">
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
};

export default Students;
