import React from "react";
import searchIcon from "../../assets/icon_search.svg";

export const HeaderSearch = () => (
  <>
    <label
      htmlFor='search-input'
      style={{ paddingLeft: "20px", paddingRight: "10px" }}>
      <img src={searchIcon} alt='' />
    </label>
    <input
      type='text'
      id='search-input'
      placeholder='Search transactions, invoices or help'
      style={{
        width: "100%",
        border: "none",
        outline: "none",
        background: "none",
        height: "100%",
        fontSize: "13px",
      }}
    />
  </>
);
