import React from "react";

export type childrenPropsType = {
  children?: React.ReactNode;
};

export interface IBookCardProps {
  image: string;
  title: string;
  isbn: string;
  price: string;
  author?: string;
}

export interface IBookCardCartProps extends IBookCardProps {
  count: number;
}

export interface ICategoryCardProps {
  link: string;
  key: string;
  title: string;
  firstPublished: string;
  lastPublished: string;
  updated: string;
}
export interface ISearchBook {
  book_author: string;
  book_title: string;
  byline: string;
  isbn13: string[];
  publication_dt: string;
  summary: string;
  uri: string;
  url: string;
  uuid: string;
}

export interface IBookCard {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}
export interface IBook {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: {};
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  count: number;
}
export interface IBookN {
  age_group?: string;
  amazon_product_url?: string;
  article_chapter_link?: string;
  asterisk?: number;
  author: string;
  book_image?: string;
  book_image_height?: number;
  book_image_width?: number;
  book_review_link?: string;
  book_uri?: string;
  buy_links?: [];
  contributor: string;
  contributor_note: string;
  dagger?: number;
  description: string;
  first_chapter_link: string;
  isbns: [];
  price: string;
  primary_isbn10?: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week?: number;
  sunday_review_link?: string;
  title: string;
  weeks_on_list?: number;
  category?: string;
}

export interface ICategories {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

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
