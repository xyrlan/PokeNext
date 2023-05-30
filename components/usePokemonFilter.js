

import { useState, useEffect } from 'react';

const usePokemonFilter = (pokemonData) => {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedGenerationFilters, setSelectedGenerationFilters] = useState([
    { start: 0, end: 151 }
  ]);
  const [selectedTypeFilters, setSelectedTypeFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleGenerationFilter = (start, end) => {
    const isFilterSelected = selectedGenerationFilters.some(
      (filter) => filter.start === start && filter.end === end
    );

    if (isFilterSelected) {
      const updatedFilters = selectedGenerationFilters.filter(
        (filter) => filter.start !== start || filter.end !== end
      );
      setSelectedGenerationFilters(updatedFilters);
    } else {
      setSelectedGenerationFilters([
        ...selectedGenerationFilters,
        { start, end },
      ]);
    }
  };

  const handleTypeFilter = (type) => {
    const isFilterSelected = selectedTypeFilters.includes(type);

    if (isFilterSelected) {
      const updatedFilters = selectedTypeFilters.filter(
        (filter) => filter !== type
      );
      setSelectedTypeFilters(updatedFilters);
    } else {
      setSelectedTypeFilters([...selectedTypeFilters, type]);
    }
  };

  useEffect(() => {
    let filteredData = pokemonData;

    if (selectedGenerationFilters.length > 0) {
      filteredData = filteredData.filter((pokemon) =>
        selectedGenerationFilters.some(
          (filter) => pokemon.id >= filter.start && pokemon.id <= filter.end
        )
      );
    }

    if (selectedTypeFilters.length > 0) {
      filteredData = filteredData.filter((pokemon) =>
        selectedTypeFilters.some((type) => pokemon.types.includes(type))
      );
    }

    if (searchQuery) {
      filteredData = filteredData.filter((pokemon) => {
        const idString = pokemon.id.toString();
        const typeStrings = pokemon.types.map((type) => type.toString());
        return (
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          idString === searchQuery ||
          typeStrings.some((type) =>
            type.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
    }

    setFilteredPokemons(filteredData);
  }, [selectedGenerationFilters, selectedTypeFilters, searchQuery, pokemonData]);

  const isGenerationFilterSelected = (start, end) => {
    return selectedGenerationFilters.some(
      (filter) => filter.start === start && filter.end === end
    );
  };

  const isTypeFilterSelected = (type) => {
    return selectedTypeFilters.includes(type);
  };

  return {
    filteredPokemons,
    handleSearch,
    handleGenerationFilter,
    handleTypeFilter,
    isGenerationFilterSelected,
    isTypeFilterSelected,
  };
};

export default usePokemonFilter;