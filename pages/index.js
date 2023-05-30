import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/Searchbar';
import React, { useState, useEffect } from 'react';
import { pokemonData } from '@/components/pokemonData'
import FilterButtons from '@/components/FilterButtons'
import useBookmark from '@/components/bookmarkhook'
import usePokemonFilter from '@/components/usePokemonFilter'

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
  //         statsName: pokemonData.stats.slice(0, 3).map(stat => stat.stat.name),
  //         stats: pokemonData.stats.slice(0, 3).map(stat => stat.base_stat),

  //       };
  //     });

  //     const pokemonData = await Promise.all(pokemonDataPromises);
  //     setPokemon(pokemonData);
  //   };

  //   fetchPokemonData();

  // }, []);

  // console.log(pokemontype.slice(999, 1008));

  const { selectedPokemon, handleBookmark } = useBookmark();
  console.log(selectedPokemon)

  const {
    filteredPokemons,
    handleSearch,
    handleGenerationFilter,
    handleTypeFilter,
    isGenerationFilterSelected,
    isTypeFilterSelected,
  } = usePokemonFilter(pokemonData);


  return (
    <>
      <div className='max-w-[1400px]'>
        <div className='flex items-center justify-center w-full overflow-hidden p-4' >

          <div className='relative w-full h-32 flex justify-center items-center'>

            <div id='image-slide-left' className='bg-cover w-72 h-72 mix-blend-overlay' style={{ backgroundImage: "url('https://unite.pokemon.com/images/pokemon/tyranitar/stat/stat-tyranitar-2x.png')" }} >
              <div id='image-slide-left' className='bg-cover w-40 h-40 mix-blend-normal absolute bottom-10' style={{ backgroundImage: "url('https://unite.pokemon.com/images/pokemon/gengar/stat/stat-gengar.png')" }} />
            </div>

            <Image
              id='image-slide-top'
              className='absolute'
              src="/images/pokemon-logo-black.png"
              width={500}
              height={250}
              alt="PokeNext"
            />

            <div id='image-slide-right' className='max-sm:hidden bg-cover w-72 h-72 mix-blend-overlay' style={{ backgroundImage: "url('https://unite.pokemon.com/images/pokemon/lapras/stat/stat-lapras-2x.png')" }} >

              <div id='image-slide-right' className='bg-cover w-40 h-40 mix-blend-normal absolute bottom-10 right-0' style={{ backgroundImage: "url('https://unite.pokemon.com/images/pokemon/dragonite/stat/stat-dragonite.png')" }} />
            </div>
          </div>

        </div>

        <div className='m-1'>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className='sm:flex'>
          <div className='flex flex-col h-fit bg-zinc-900 sm:max-w-[15%] mt-2 p-4 rounded-xl shadow-inner shadow-black'>

            <FilterButtons handleGenerationFilter={handleGenerationFilter} isGenerationFilterSelected={isGenerationFilterSelected} handleTypeFilter={handleTypeFilter} isTypeFilterSelected={isTypeFilterSelected} />

          </div>

          <div className='grid xl:grid-cols-6 h-fit w-full lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 grid-flow-row grid-auto-rows sm:grid-cols-2 gap-4 gap-x-6 p-4 m-2 bg-zinc-900 rounded-xl shadow-inner shadow-black'>
            {filteredPokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} handleBookmark={handleBookmark} selectedPokemon={selectedPokemon} />

            ))}
          </div>
        </div>
      </div>
    </>
  )
}
