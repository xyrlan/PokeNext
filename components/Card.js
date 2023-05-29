import Image from "next/image"
import Link from "next/link"

import React, { useState, useEffect } from 'react';

import styles from '../styles/Pokemon.module.css'


export default function Card({ pokemon }) {


    const typeClasses = {
        normal: 'from-[#aa9]',
        fire: 'from-[#f42]',
        water: 'from-[#39f]',
        electric: 'from-[#fc3]',
        grass: 'from-[#7c5]',
        ice: 'from-[#6cf]',
        fighting: 'from-[#b54]',
        poison: 'from-[#a59]',
        ground: 'from-[#db5]',
        flying: 'from-[#89f]',
        psychic: 'from-[#f59]',
        bug: 'from-[#ab2]',
        rock: 'from-[#ba6]',
        ghost: 'from-[#66b]',
        dragon: 'from-[#76e]',
        dark: 'from-[#754]',
        steel: 'from-[#aab]',
        fairy: 'from-[#e9e]',
    }

    const fadeInClass = "animate-fade-in"


    return (
        <>

            <Link href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}
                className={`flex items-center relative rounded-xl shadow-md shadow-black bg-gray-600 hover:scale-125 ease-out duration-500 hover:z-50 hover:brightness-125 ${fadeInClass}`}>

                <div className="z-10 flex p-2 h-fit items-center gap-2">

                    <div className='border border-gray-600 shadow-inner rounded-full relative w-12 h-12 flex justify-center items-center' href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
                        {
                            pokemon.types.map((type, index) => (
                                <div
                                    key={index}
                                    className={`absolute shadow-gray-800 shadow-inner rounded-full w-12 h-12 bg-cover bg-gradient-to-br
                             ${index === 0 ? `from-100% ${typeClasses[type]} to-transparent` :
                                            index === 1 ? ` ${typeClasses[type]}  to-transparent bg-gradient-to-tl` :
                                                ''
                                        }`}
                                />
                            ))
                        }

                        <Image
                            className="absolute "
                            // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}
                            src={`${pokemon.id < 649 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}`}
                            width={40}
                            height={40}
                            alt={pokemon.name}
                        />
                    </div>


                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="" href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
                                <div>
                                    <p className='text-[#333] border-b border-b-[#333] text-xs '>No. {pokemon.id}</p>
                                    <h3 className={`text-zinc-800  text-sm font-bold m-1`}> {pokemon.name}</h3>
                                </div>
                            </div>
                        </div>


                        <div className={`w-4 h-4 absolute right-1 top-1 rounded-full duration-500 cursor-pointer hover:scale-105 hover:bg-neutral-500 from-red-500 via-neutral-600 to-white bg-gradient-to-b`}>
                            <Image src={'/images/pokebola-black.png'} width={16} height={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}