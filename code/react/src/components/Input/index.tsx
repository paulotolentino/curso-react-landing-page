import React from "react";
import { Form, Input as AntdInput } from "antd";

type InputProps = {
  label: string;
  rules: Object[];
  size: "large" | "middle" | "small";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

type AlunoReducerValue = {
  value?: string;
  isValid?: boolean;
};

export type AlunoReducer = {
  nome: AlunoReducerValue;
  idade: AlunoReducerValue;
  telefone: AlunoReducerValue;
  email: AlunoReducerValue;
  isValid: AlunoReducerValue;
};

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  rules,
  size,
  value,
}) => (
  <Form.Item label={label} name={label} rules={rules}>
    <AntdInput
      size={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </Form.Item>
);

export default Input;
