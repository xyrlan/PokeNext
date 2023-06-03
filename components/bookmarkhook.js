import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const useBookmark = () => {
  const [selectedPokemon, setselectedPokemon] = useState([]);
  const { isAuthenticated, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const localBookmarks = localStorage.getItem('selectedPokemon');
    if (localBookmarks) {
      setselectedPokemon(JSON.parse(localBookmarks));
    }
  }, []);

  const handleBookmark = (item) => {
    if (user) {
      setselectedPokemon((prevPokemons => {
        const pokemonExists = prevPokemons.some((bookmark) => bookmark.id === item.id);
        let updatedBookmarks
        if (pokemonExists) {
          updatedBookmarks = prevPokemons.filter(
            (bookmark) => bookmark.id !== item.id
          );
        } else {
          updatedBookmarks = [...prevPokemons, item];
        }
        localStorage.setItem('selectedPokemon', JSON.stringify(updatedBookmarks));
        return updatedBookmarks
      }))
    } else {
      router.push('/api/auth/login');
    }
  };


  return { selectedPokemon, handleBookmark };
};

export default useBookmark;