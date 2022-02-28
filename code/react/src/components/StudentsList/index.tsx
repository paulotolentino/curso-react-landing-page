import React, { useEffect, useState } from "react";
import { Typography, Row, Table } from "antd";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import { ColumnDefinitionProps, StudentProps } from "../Student";
import { LOAD_ALUNOS } from "../graphql/Queries";
import { Aluno } from "../../types/aluno";

import "./index.css";

const { Title } = Typography;

const StudentList: React.FC = () => {
  const { t } = useTranslation();
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const { data, loading, error } = useQuery(LOAD_ALUNOS, {
    // Cache removido - Após a inclusão, o cache ficava retornando o valor antigo (Sem a nova inclusão)
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (error) {
      alert("Ops! tivemos um problema na consulta de alunos");
      console.error(error);
      return;
    }
    if (!loading && data) {
      setAlunos(data.getAllAlunos);
    }
  }, [data, loading, error]);

  const columnsDefinition: ColumnDefinitionProps[] = [
    {
      title: t("students.name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("students.age"),
      dataIndex: "idade",
      key: "idade",
    },
    {
      title: t("students.cell"),
      dataIndex: "cellphone",
      key: "cellphone",
    },
    {
      title: t("students.email"),
      dataIndex: "email",
      key: "email",
    },
  ];

  const studentsData: StudentProps[] =
    alunos?.map((aluno, index) => {
      return {
        key: aluno.id || String(index),
        idade: aluno.idade,
        name: aluno.nome,
        cellphone: aluno.telefone,
        email: aluno.email,
      };
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
