import Image from "next/image"
import Link from "next/link"

import React, { useState, useEffect } from 'react';

import styles from '../styles/Pokemon.module.css'


export default function Card({ pokemon, handleBookmark, isSelectedPokemon }) {


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
    const typeColors = {
        normal: 'group-hover:text-[#aa9]',
        fire: 'group-hover:text-[#f42]',
        water: 'group-hover:text-[#39f]',
        electric: 'group-hover:text-[#fc3]',
        grass: 'group-hover:text-[#7c5]',
        ice: 'group-hover:text-[#6cf]',
        fighting: 'group-hover:text-[#b54]',
        poison: 'group-hover:text-[#a59]',
        ground: 'group-hover:text-[#db5]',
        flying: 'group-hover:text-[#89f]',
        psychic: 'group-hover:text-[#f59]',
        bug: 'group-hover:text-[#ab2]',
        rock: 'group-hover:text-[#ba6]',
        ghost: 'group-hover:text-[#66b]',
        dragon: 'group-hover:text-[#76e]',
        dark: 'group-hover:text-[#754]',
        steel: 'group-hover:text-[#aab]',
        fairy: 'group-hover:text-[#e9e]',
    }


    return (
        <>

            <div
                id="animate-fade-in"
                className={`flex h-fit gap-[2%] hover:pt-3 hover:justify-center relative rounded-xl shadow-md shadow-black bg-gray-600 hover:z-50 hover:scale-125 hover:row-span-2 hover:bg-white group duration-150 ease-out transition hover:ease-in max-sm:justify-center `}>

                <div className="z-10 flex p-2 h-fit items-center gap-2 group-hover:flex-col max-sm:flex-col">

                    <Link href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`} className='border border-gray-600 shadow-inner rounded-full relative w-12 h-12 flex justify-center items-center group-hover:scale-125'>
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
                            className="absolute group-hover:scale-125 duration-500 w-auto h-auto"
                            // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}
                            src={`${pokemon.id < 649 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}`}
                            width={50}
                            height={50}
                            alt={pokemon.name}
                        />
                    </Link>


                    <div  className="flex items-center">
                        <div className="flex items-center">
                            <Link className="" href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
                                <div>
                                    <p className='text-[#333] border-b border-b-[#333] text-xs '>No. {pokemon.id}</p>
                                    <h3 className={`text-zinc-900 rounded text-base font-bold m-1 ${pokemon.types.map((type) => typeColors[type])[0]}`}> {pokemon.name} </h3>
                                </div>
                            </Link>
                        </div>


                        <div 
                        onClick={() => handleBookmark(pokemon)}
                        className={` w-4 h-4 absolute right-1 top-1 duration-500 cursor-pointer`}>
                            <Image className={`bg-zinc-600 rounded-full h-fit duration-300 ${isSelectedPokemon ? 'opacity-100' : 'opacity-20 hover:opacity-50'}`} 
                            src={'/images/pokeballatt.png'} width={16} height={16} alt='pokeball' />
                        </div>
                    </div>
                </div>

                <Link href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`} className="flex-col sm:opacity-0 duration-300 sm:hidden group-hover:sm:opacity-100 group-hover:sm:flex max-sm:flex justify-center items-center gap-2 text-[#333]">

                    <div className="flex gap-1">
                        {
                            pokemon.types.map((type, index) => (
                                <div key={index} className={`rounded border text-sm shadow px-[0.1rem] shadow-[#333] border-[#333] scale-90 ${['type_' + type]}`}>{type}</div>
                            ))}
                    </div>



                    <div className="flex gap-1 text-sm">
                        <div className="">
                            <div>hp:  </div>
                            <div>atk: </div>
                            <div>def: </div>
                        </div>
                        <div className="text-zinc-400">
                            {pokemon.stats.map((stat, index) => <p key={index}>{stat}</p>)}
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}