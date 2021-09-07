import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByQuery } from "../../actions";
import { useHistory } from "react-router";

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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search Country"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
