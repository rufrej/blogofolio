import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "./FormField.tsx";
import { FormFieldElement } from "../types/types.ts";
import loupe from "../assets/header-icons/search.svg";

export function SearchForm() {
  const navigate = useNavigate();
  const [query, setQeury] = useState<string>("");

  const handleChange = ({ target }: React.ChangeEvent<FormFieldElement>) => {
    console.log("search: " + target.value);
    setQeury(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedQuery = encodeURIComponent(query);
    if (encodedQuery !== "") {
      navigate(`/search/${encodedQuery}/1`);
      setQeury("");
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__form__input__wrapper">
          <FormField
            name="search"
            type="text"
            value={query}
            placeholder="search..."
            list="datalist"
            onChange={handleChange}
          />
        </div>

        <button className="search__form__button" type="submit">
          <img src={loupe} alt="" />
        </button>
      </form>
    </div>
  );
}
