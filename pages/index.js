import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Card from '../components/Card'
import SearchBar from '../components/Searchbar';
import React, { useState, useEffect } from 'react';

export async function getStaticProps() {

  const maxPokemons = 721

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
export default function Home({pokemons}) {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handleSearch = (query) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };
  

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png"
        width={50}
        height={50}
        alt='Pokenext'
        />
      </div>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className={styles.pokemon_container}>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
          
        ))}
      </div>
    </>
  )
}
