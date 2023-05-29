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
    <div className=''>
      <input className='w-full outline-none text-white bg-[#333] p-2 text-sm '
        type="search"
        placeholder="Pesquisar Pokemons (id's, types)..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
    </div>
  );
}