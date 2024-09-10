import React, { useState } from "react";
const data = [
  "banana",
  "apple",
  "app",
  "barbell",
  "boxing",
  "alpha",
  "cat",
  "car",
  "camera",
  "vishal",
  "dhamendra",
];

function SearchBar() {
  const [search, setSearch] = useState("");
  const HandleChange = (event) => {
    setSearch(event.target.value);
  };
  const FilterSearch = data.filter((item) =>
    item.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Bar</h2>
      <input value={search} onChange={HandleChange} />
      <ul>
        {FilterSearch.length > 0 ? (
          FilterSearch.map((item, key) => <p key={key}>{item}</p>)
        ) : (
          <p>no result found</p>
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
