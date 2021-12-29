import React from "react";
import { useState } from "react";

export default function Search(props) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.userSearch(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        name="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input className="search-button" type="submit" value="search" />
    </form>
  );
}
