import React from "react";
import Searchicon from "@mui/icons-material/Search";
import "./style.css"

const SearchBar = ({ value, changeInpput }) => {
  return (
    <div className="searchBar-wrap">
      <Searchicon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInpput}
      />
    </div>
  );
};

export default SearchBar;
