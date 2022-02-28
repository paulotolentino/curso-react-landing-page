import { useTranslation } from "react-i18next";
import { useQuery, useMutation } from "@apollo/client";

import {
  AddMargin,
  MainCard,
  Table,
  Table2Columns,
} from "../../pages/Home/home.main.styles";
import { Aluno } from "../../types/aluno";
import MainForm from "../MainForm";
import { CREATE_ALUNO_MUTATION } from "../graphql/Mutations";

import "./index.css";

const MainPage = () => {
  const { t } = useTranslation();
  const [createAluno, { error }] = useMutation(CREATE_ALUNO_MUTATION);

  const handleSignUp = async (value: Aluno) => {
    createAluno({
      variables: {
        ...value,
      },
    });
    if (!error) alert("Cadastro realizado com sucesso!");
    else {
      console.error(error);
      alert("Erro ao realizar o cadastro.");
    }
  };

  return (
    <Table>
      <Table2Columns>
        <AddMargin>
          <h1 className="main-section-title">{t("main.title")}</h1>
          <h3 className="main-section-description">{t("main.description")}</h3>
        </AddMargin>
      </Table2Columns>
      <Table2Columns>
        <MainCard>
          <MainForm handleSignUp={handleSignUp} />
        </MainCard>
      </Table2Columns>
    </Table>
  );
};

export default MainPage;
