import React, {useState} from "react";

function Search( {setSearchTerm}) {
const [searchInput, setSearchInput]= useState(""); //set state so we can type in input with default state ""

function handleSearchInput (e) {
  setSearchInput(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(searchInput) //from app component
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
