import { useTranslation } from "react-i18next";

import {
  AddMargin,
  MainCard,
  Table,
  Table2Columns,
} from "../../pages/Home/home.main.styles";
import { Aluno } from "../../types/aluno";
import MainForm from "../MainForm";

const MainPage = () => {
  const { t } = useTranslation();

  const handleSignUp = (value: Aluno) => {
    console.log("TODO send a post value");
    console.log(value);
  };

  return (
    <Table>
      <Table2Columns>
        <AddMargin>
          <h1>{t("main.title")}</h1>
          <h3>{t("main.description")}</h3>
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
