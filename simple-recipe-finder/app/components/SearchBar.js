
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = () => {
    onSearch(ingredient);
    setIngredient("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredients"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
