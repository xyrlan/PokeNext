import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/Searchbar';
import React, { useState, useEffect } from 'react';
import { pokemonData } from '@/components/pokemonData'

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

  const [filteredPokemons, setFilteredPokemons] = useState(pokemonData);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearch = (query) => {
    const filtered = pokemonData.filter((pokemon) => {
      const idString = pokemon.id.toString();
      const typeStrings = pokemon.types.map((type) => type.toString());
      return (
        pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
        idString === query ||
        typeStrings.some((type) =>
          type.toLowerCase().includes(query.toLowerCase())
        )
      );
    });
  
    setFilteredPokemons(filtered);
  };
  
  const handleGenerationFilter = (start, end) => {
    // Verifica se o filtro já foi selecionado antes de adicioná-lo
    const isSelected = selectedFilters.find(
      (filter) => filter.start === start && filter.end === end
    );
  
    if (isSelected) {
      // Remove o filtro selecionado se já estava selecionado
      const updatedFilters = selectedFilters.filter(
        (filter) => !(filter.start === start && filter.end === end)
      );
      setSelectedFilters(updatedFilters);
    } else {
      // Adiciona o filtro selecionado à lista de filtros
      const newFilter = { start, end };
      setSelectedFilters([...selectedFilters, newFilter]);
    }
  };
  
  useEffect(() => {
    // Aplica os filtros selecionados à lista de Pokémon filtrada
    let filteredData = pokemonData;
  
    selectedFilters.forEach((filter) => {
      filteredData = filteredData.filter(
        (pokemon) => pokemon.id >= filter.start && pokemon.id <= filter.end
      );
    });
  
    setFilteredPokemons(filteredData);
  }, [selectedFilters]);


  return (
    <>
      <div className='flex justify-center'>
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
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(0, 151)}>Gen1</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(151, 251)}>Gen2</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(252, 386)}>Gen3</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(387, 493)}>Gen4</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(494, 659)}>Gen5</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(660, 721)}>Gen6</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(722, 809)}>Gen7</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(810, 905)}>Gen8</button>
        <button className={`${selectedFilters ? 'bg-white' : ''}`} onClick={() => handleGenerationFilter(906, 1008)}>Gen9</button>
      </div>
      <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-2 gap-4 gap-x-6 px-[10%]'>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />

        ))}
      </div>
    </>
  )
}
