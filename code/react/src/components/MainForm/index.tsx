import React, { useReducer } from "react";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Aluno } from "../../types/aluno";

type FormProps = {
  handleSignUp: (value: Aluno) => void;
};

interface AlunoReducerValue {
  value?: string;
  isValid?: boolean;
}
interface AlunoReducer {
  nome: AlunoReducerValue;
  idade: AlunoReducerValue;
  telefone: AlunoReducerValue;
  email: AlunoReducerValue;
  isValid: AlunoReducerValue;
}

const aluno: AlunoReducer = {
  nome: { value: "" },
  idade: { value: "" },
  telefone: { value: "" },
  email: { value: "" },
  isValid: {},
};

//Outside the Component Function.
const alunoReducer = (
  state: AlunoReducer,
  action: {
    key: keyof AlunoReducer;
    type: "USER_INPUT" | "INPUT_BLUR";
    value: string;
  }
) => {
  // Value
  if (action.key === "idade") {
    state[action.key].value = action.value.replace(/\D/g, "");
  } else {
    state[action.key].value = action.value;
  }

  // Validade
  if (action.key === "telefone") {
    state.telefone.isValid = state.telefone?.value
      ? state.telefone?.value.length > 8
      : false;
  } else if (action.key === "email") {
    state[action.key].isValid = !!action.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  } else {
    state[action.key].isValid = !!state[action.key].value;
  }

  let isValid = true;
  for (const [key, value] of Object.entries(state)) {
    if (key !== "isValid") isValid = isValid && value.isValid;
  }
  state.isValid.value = isValid ? "true" : undefined;

  return { ...state };
};

const MainForm: React.FC<FormProps> = ({ handleSignUp }: FormProps) => {
  const { t } = useTranslation();

  const [alunoState, dispatchAluno] = useReducer(alunoReducer, aluno);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof AlunoReducer
  ) => {
    dispatchAluno({ key, type: "USER_INPUT", value: e.target.value });
  };

  return (
    <Form
      name="signUp"
      onSubmitCapture={(e) => {
        console.log("ÄAAA");
        e.preventDefault();
        const aluno: Aluno = {
          email: alunoState.email.value || "",
          idade: Number(alunoState.idade.value || ""),
          nome: alunoState.nome.value || "",
          telefone: alunoState.telefone.value || "",
        };

        handleSignUp(aluno);
      }}
    >
      <Form.Item
        label={t("main.name")}
        name={`${t("main.name")}`}
        rules={[{ required: true, message: t("main.value_required") }]}
      >
        <Input
          size="large"
          placeholder={t("main.input.name")}
          onChange={(e) => handleInputChange(e, "nome")}
          value={alunoState.nome.value}
        />
      </Form.Item>

      <Form.Item
        label={t("main.age")}
        name={`${t("main.age")}`}
        rules={[{ required: true, message: t("main.value_required") }]}
      >
        <Input
          size="large"
          placeholder={t("main.input.age")}
          onChange={(e) => handleInputChange(e, "idade")}
          value={alunoState.idade.value}
        />
      </Form.Item>

      <Form.Item
        label={t("main.cell")}
        name={`${t("main.cell")}`}
        rules={[{ required: true, message: t("main.value_required") }]}
      >
        <Input
          size="large"
          placeholder={t("main.input.cell")}
          onChange={(e) => handleInputChange(e, "telefone")}
          value={alunoState.telefone.value}
        />
      </Form.Item>

      <Form.Item
        label={t("main.email")}
        name={`${t("main.email")}`}
        rules={[{ required: true, message: t("main.value_required") }]}
      >
        <Input
          size="large"
          placeholder={t("main.input.email")}
          onChange={(e) => handleInputChange(e, "email")}
          value={alunoState.email.value}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!!!alunoState.isValid.value}
        >
          {t("main.signup")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MainForm;
