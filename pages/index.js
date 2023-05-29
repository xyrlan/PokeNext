import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/Searchbar';
import React, { useState, useEffect } from 'react';
import { pokemonData } from '@/components/pokemonData'
import FilterButtons from '@/components/FilterButtons'

export async function getStaticProps() {

  const maxPokemons = 1008

  const api = 'https://pokeapi.co/api/v2/pokemon'
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    const id = index + 1;
    if (id < 10) {
      item.id = '00' + id;
    } else if (id < 100) {
      item.id = '0' + id;
    } else {
      item.id = id.toString();
    }
  });
  return {
    props: {
      pokemons: data.results,
    },
  }
}


export default function Home({ pokemons }) {


  // const [pokemontype, setPokemon] = useState([]);

  // useEffect(() => {

  //   const fetchPokemonData = async () => {
  //     const pokemonDataPromises = pokemons.map(async (pokemon) => {
  //       const response = await fetch(pokemon.url);
  //       const pokemonData = await response.json();
  //       return {
  //         ...pokemon,
  //         types: pokemonData.types.map((type) => type.type.name),

  //       };
  //     });

  //     const pokemonData = await Promise.all(pokemonDataPromises);
  //     setPokemon(pokemonData);
  //   };

  //   fetchPokemonData();

  // }, []);

  // console.log(pokemontype.slice(1000));

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

  // Funções para verificar se um filtro de geração ou tipo está selecionado
  const isGenerationFilterSelected = (start, end) => {
    return selectedGenerationFilters.some(
      (filter) => filter.start === start && filter.end === end
    );
  };

  const isTypeFilterSelected = (type) => {
    return selectedTypeFilters.includes(type);
  };

  return (
    <>
      <div className='flex justify-center p-2'>
        <div className='w-fit relative ' >
          <Image
            id='image-slide-top'
            className=''
            src="/images/pokemon-logo-black.png"
            width={500}
            height={250}
            alt="PokeNext"
          />
        </div>
      </div>

      <div className='ml-[15%]'>
      <SearchBar onSearch={handleSearch} />
      </div>

      <div className='flex'>
        <div className='flex flex-col h-fit bg-zinc-900 w-[15%] p-4 rounded-xl shadow-inner shadow-black'>
          
          <FilterButtons handleGenerationFilter={handleGenerationFilter} isGenerationFilterSelected={isGenerationFilterSelected} handleTypeFilter={handleTypeFilter} isTypeFilterSelected={isTypeFilterSelected} />

        </div>
        
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-2 gap-4 gap-x-6 p-4 bg-zinc-900 rounded-xl shadow-inner shadow-black'>
          {filteredPokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />

          ))}
        </div>
      </div>
    </>
  )
}
