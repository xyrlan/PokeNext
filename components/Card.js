import Image from "next/image"
import Link from "next/link"

import React, { useState, useEffect } from 'react';

import styles from '../styles/Card.module.css'


export default function Card({pokemon}) {
    return (
        <div className={styles.card}>
            <Link className={styles.image} href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
            <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`} 
            width={160}
            height={160}
            alt={pokemon.name}
            />
            </Link>
            <p className={styles.id}>#{pokemon.id}</p>
            <Link href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
            <h3 className={styles.title}>{pokemon.name}</h3>
            </Link>
            
        </div>
        
       
    )
}