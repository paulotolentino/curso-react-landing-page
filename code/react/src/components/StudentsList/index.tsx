import React from "react";
import { Typography, Row, Table } from "antd";
import { useTranslation } from "react-i18next";

import { ColumnDefinitionProps, StudentProps } from "../Student";
import "./index.css";
import { useGet } from "../../hooks/customHooks";
import { Aluno } from "../../types/aluno";

const { Title } = Typography;

const StudentList: React.FC = () => {
  const { t } = useTranslation();
  const { response } = useGet<Aluno[]>("/alunos");
  const alunos: Aluno[] | undefined = response?.data;

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

  const studentsData: StudentProps[] = alunos?.map((aluno, index) => {
    return {
      key: aluno.id || String(index),
      name: aluno.nome,
      cellphone: aluno.telefone,
      email: aluno.email,
    }
  }) || [];

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
