import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByQuery } from "../../actions";
import { useHistory } from "react-router";
import style from "./search.module.css"

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleChange = (e) => {
    setQuery((query) => (query = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(push("/home"), 1000);
    setTimeout(dispatch(getCountriesByQuery(query)), 1000);
    setQuery((query) => (query = ""));
  };

  return (
    <div className = {style.todo}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search Country"
          value={query}
          onChange={handleChange}
        />
        <button className = {style.boton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
