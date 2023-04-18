import { useState } from "react";

import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
    <div className={styles.searchbar}>
      <input className={styles.placeholder}
        type="search"
        placeholder="Pesquisar Pokemons..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
    </div>
  );
}