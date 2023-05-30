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

    const fadeInClass = "animate-fade-in"

    return (
        <>

            <Link href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}
                className={`flex row h-fit gap-[2%] hover:p-2 hover:justify-center relative rounded-xl shadow-md shadow-black bg-gray-600 hover:scale-125 ease-out duration-300 hover:z-50 hover:brightness-125 hover:row-span-2 hover:bg-gray-950 ${fadeInClass} group`}>

                <div className="z-10 flex p-2 h-fit items-center gap-2 group-hover:flex-col max-sm:flex-col">

                    <div className='border border-gray-600 shadow-inner rounded-full relative w-12 h-12 flex justify-center items-center group-hover:mb-2 group-hover:ml-2' href={`/pokemon/${parseInt(pokemon.id, 10).toString()}`}>
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
                            className="absolute group-hover:scale-125 duration-300 "
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
                                    <h3 className={`text-zinc-900 rounded text-base font-bold m-1 ${pokemon.types.map((type) => typeColors[type])[0]}`}> {pokemon.name} </h3>
                                </div>
                            </div>
                        </div>


                        <div className={`w-4 h-4 absolute right-1 top-1 rounded-full duration-500 cursor-pointer hover:scale-105 hover:bg-neutral-500  bg-gradient-to-b`}>
                            <Image src={'/images/pokebola-black.png'} width={16} height={16} alt='pokeball' />
                        </div>
                    </div>
                </div>

                <div className="flex-col sm:opacity-0 duration-300 sm:hidden group-hover:sm:opacity-100 group-hover:sm:flex max-sm:flex justify-center items-center gap-2 text-[#333]">

                    <div className="flex gap-1">
                        {
                            pokemon.types.map((type, index) => (
                                <div key={index} className={`rounded border text-xs border-[#333] p-[0.2rem] ${['type_' + type]}`}>{type}</div>
                            ))}
                    </div>
                    <div className="flex gap-1 text-sm">
                        <div className="">
                            <div>hp:  </div>
                            <div>attack: </div>
                            <div>defense: </div>
                        </div>
                        <div className="text-zinc-400">
                            {pokemon.stats.map((stat, index) => <p key={index}>{stat}</p>)}
                        </div>

                    </div>
                </div>
            </Link>
        </>
    )
}