import { useTranslation } from "react-i18next";
import { usePost } from "../../hooks/customHooks";

import {
  AddMargin,
  MainCard,
  Table,
  Table2Columns,
} from "../../pages/Home/home.main.styles";
import { Aluno } from "../../types/aluno";
import MainForm from "../MainForm";
import "./index.css";

const MainPage = () => {
  const { t } = useTranslation();
  const { apiPost } = usePost<Aluno>("/alunos");

  const handleSignUp = async (value: Aluno) => {
    const result = await apiPost(value);
    if (result) alert("Cadastro realizado com sucesso!");
    else alert("Erro ao realizar o cadastro.");
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
