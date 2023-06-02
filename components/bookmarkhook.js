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
      fetch('/api/user/pokemon') // Substitua a URL pela rota correta da sua API
        .then(response => response.json())
        .then(data => {
          setselectedPokemon(data.selectedPokemon || []);
        })
        .catch(error => {
          console.error('Erro ao carregar os Pokémons marcados:', error);
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Atualizar os dados do usuário, se estiver autenticado
    if (isAuthenticated) {
      fetch('/api/user/pokemon', {
        method: 'POST', // Ou o método adequado para atualização na sua API
        body: JSON.stringify({ selectedPokemon }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .catch(error => {
          console.error('Erro ao atualizar os Pokémons marcados:', error);
        });
    }
  }, [selectedPokemon, isAuthenticated]);

  return { selectedPokemon, handleBookmark };
};

export default useBookmark;