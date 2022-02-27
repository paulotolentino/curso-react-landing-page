import React from "react";
import { Typography, Row, Table } from "antd";
import { useTranslation } from "react-i18next";

import { ColumnDefinitionProps, StudentProps } from "../Student";
import "./index.css";

const { Title } = Typography;

const StudentList: React.FC = () => {
  const { t } = useTranslation();

  const columnsDefinition: ColumnDefinitionProps[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Cellphone",
      dataIndex: "cellphone",
      key: "cellphone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const studentsData: StudentProps[] = [
    {
      key: "1",
      name: "John Brown",
      cellphone: "(99) 99999-9999",
      email: "brown@mail.com",
    },
    {
      key: "2",
      name: "Jim Green",
      cellphone: "(88) 88888-8888",
      email: "green@mail.com",
    },
    {
      key: "3",
      name: "Joe Black",
      cellphone: "(77) 77777-7777",
      email: "black@mail.com",
    },
  ];

  return (
    <div className="students-list-section">
      <Row className="students-call">
        <Title>{t("students.title")}</Title>
      </Row>
      <Row className="students-list-table">
        <Table columns={columnsDefinition} dataSource={studentsData} />
      </Row>
    </div>
  );
};

export default StudentList;
