import React from "react";

export type childrenPropsType = {
  children?: React.ReactNode;
};

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

export interface IBook {
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
export interface ICategory {
  bestsellers_date: string;
  books: [];
  corrections: [];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
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

export interface IFormFieldProps {
  type: string;
  className?: string;
  name?: string;
  label?: string;
  value: string | number;
  id?: string;
  placeholder?: string;
  ref?: React.Ref<FormFieldElement>;
  onChange: (event: React.ChangeEvent<FormFieldElement>) => void;
}

export type FormFieldElement = HTMLInputElement;
