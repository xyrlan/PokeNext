import { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

const useBookmark = () => {
  const [selectedPokemon, setselectedPokemon] = useState([]);
  const { isAuthenticated, user } = useUser();

  const handleBookmark = (title) => {
    const isSelected = selectedPokemon.includes(title);
    if (isSelected) {
      setselectedPokemon(selectedPokemon.filter((pokemon) => pokemon !== title));
    } else {
      setselectedPokemon([...selectedPokemon, title]);
    }
  };

  useEffect(() => {
    // Carregar os dados do usuário, se estiver autenticado
    if (isAuthenticated) {
      setselectedPokemon(user.selectedPokemon || []);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    // Atualizar os dados do usuário, se estiver autenticado
    if (isAuthenticated) {
      user.update({ selectedPokemon });
    }
  }, [selectedPokemon, isAuthenticated, user]);

  return { selectedPokemon, handleBookmark };
};

export default useBookmark;