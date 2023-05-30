import { useEffect, useState } from 'react';

const useBookmark = () => {
  const [selectedPokemon, setselectedPokemon] = useState([]);

  const handleBookmark = (title) => {
    const isSelected = selectedPokemon.includes(title);
    if (isSelected) {
      setselectedPokemon(selectedPokemon.filter((pokemon) => pokemon !== title));
    } else {
      setselectedPokemon([...selectedPokemon, title]);
    }
  };

  useEffect(() => {
    const savedselectedPokemon = localStorage.getItem('selectedPokemon');
    if (savedselectedPokemon) {
      setselectedPokemon(JSON.parse(savedselectedPokemon));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedPokemon', JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  return { selectedPokemon, handleBookmark };
};

export default useBookmark;