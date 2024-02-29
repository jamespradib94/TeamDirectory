import React from "react";
import searchIcon from "../assets/searchicon.png";

export const Header = (props) => {
  const { value, handleChange } = props;
  return (
    <div className="d-flex align-items-center justify-content-between px-5 py-3 header-bg-blue">
      <h2 className="text-white">Team</h2>
      <div className="position-relative">
        <div className="search-icon">
          <img className="h-50" src={searchIcon}></img>
        </div>
        <input className="header-input-search" value={value} placeholder={"Search"} onChange={handleChange} />
      </div>
    </div>
  );
};