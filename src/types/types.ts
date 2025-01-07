import React from "react";

export interface IPost {
  author: number;
  date: string;
  description: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

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
export type FormFieldElement = HTMLInputElement;
export interface IFormFieldProps {
  type: string;
  className?: string;
  name?: string;
  label?: string;
  value: string | number;
  id?: string;
  placeholder?: string;
  ref?: React.Ref<FormFieldElement>;
  list?: string;
  onChange: (event: React.ChangeEvent<FormFieldElement>) => void;
}

export interface ISimilarBooksProps {
  subtitle: string;
  isbn: string;
}
