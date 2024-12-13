import React from "react";

export type childrenPropsType = {
  children?: React.ReactNode;
};

export interface IJwt {
  refresh: string;
  access: string;
}
export interface IUserData {
  username: string;
  id: number;
  email: string;
}
export interface ISignUp {
  course_group: number;
  email: string;
  password: string;
  username: string;
}
export interface ISignIn {
  email: string;
  password: string;
}

export interface IFormFieldProps {
  type: string;
  className?: string;
  name?: string;
  label?: string;
  value: string;
  id?: string;
  placeholder?: string;
  ref?: React.Ref<FormFieldElement>;
  onChange: (event: React.ChangeEvent<FormFieldElement>) => void;
}

export type FormFieldElement = HTMLInputElement;
