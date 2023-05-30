import { useState } from "react";
import Image from "next/image";

import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className=' flex items-center'>
      <Image src='/images/search-icon.svg' width={16} height={16} alt="search-icon" />
      <input className='w-full outline-none text-white bg-[#333] p-2 text-sm '
        type="search"
        placeholder="Pesquisar Pokemons (id's, types)..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>

  );
}