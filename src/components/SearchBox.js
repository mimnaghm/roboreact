import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--white bg-light-gray"
        type="search"
        placeholder="Mech Finder"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
