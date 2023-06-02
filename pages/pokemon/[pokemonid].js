import Image from "next/image"
import { useState, useEffect } from "react"

import DamageRelations from "@/components/DamageRelations"
import { pokemonData } from "@/components/pokemonData"

import styles from "../../styles/Pokemon.module.css"



export const getStaticPaths = async () => {

    const paths = pokemonData.map((pokemon, index) => {

        return {
            params: { pokemonid: pokemon.id },
        }

    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    const pokemonDT = {
        types: data.types,
        abilities: data.abilities,
        name: data.name,
        id: data.id,
        weight: data.weight,
        height: data.height,
        stats: data.stats,
    };

    return {
        props: {
            pokemon: pokemonDT,

        },
        revalidate: 1,
    }
}

export default function Pokemon({ pokemon, pokemontypes }) {


    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        const fetchTypeData = async () => {
            const typeUrls = pokemon.types.map((type) => type.type.url);
            const responses = await Promise.all(typeUrls.map((url) => fetch(url)));
            const jsonData = await Promise.all(responses.map((res) => res.json()));
            const damageRelations = jsonData.map((data) => data.damage_relations);
            setTypeData(damageRelations);
        };

        fetchTypeData();
    }, [pokemon.types]);

    const typeClasses = {
        normal: 'shadow-[#aa9]',
        fire: 'shadow-[#f42]',
        water: 'shadow-[#39f]',
        electric: 'shadow-[#fc3]',
        grass: 'shadow-[#7c5]',
        ice: 'shadow-[#6cf]',
        fighting: 'shadow-[#b54]',
        poison: 'shadow-[#a59]',
        ground: 'shadow-[#db5]',
        flying: 'shadow-[#89f]',
        psychic: 'shadow-[#f59]',
        bug: 'shadow-[#ab2]',
        rock: 'shadow-[#ba6]',
        ghost: 'shadow-[#66b]',
        dragon: 'shadow-[#76e]',
        dark: 'shadow-[#754]',
        steel: 'shadow-[#aab]',
        fairy: 'shadow-[#e9e]',
    }


    const renderStats = () => {
        return pokemon.stats.map((stat) => {
            const stat_name = stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1);
            const base_stat = stat.base_stat;
            return <div className="text-lg" key={stat_name}>{stat_name}: <span className="text-white">{base_stat}</span></div>;
        });
    };

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`


    const type = pokemon.types.length > 0 ? pokemon.types[0].type.name : null;


    return (
        <>
            <div className=" bg-[#333] min-h-screen px-[7%] flex justify-center">

                <div className='flex justify-center items-center relative max-lg:flex-col w-full'>
                    <div className="">
                        <h1 className='text-white max-sm:text-5xl mt-5 text-6xl rounded-tl-3xl shadow-70% bg-gradient-to-r w-fit mb-5 from-red-500 '><span className="mr-5 text-4xl text-zinc-400">#{pokemon.id}</span>{pokemon.name}</h1>
                        <div className="relative h-[374px] w-[374px] max-lg:h-[300px] max-lg:w-[300px] max-md:h-[250px] max-md:w-[250px] max-sm:w-[200px] max-sm:h-[200px]">

                            <div className="w-full h-full absolute bg-cover z-10" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                            <div className={` ${['type_' + type]} circle shadow-2xl rounded-[50%] ${typeClasses[type]} absolute animate-pulse -bottom-7 max-lg:w-[300px] max-md:w-[250px] w-[374px] h-[150px] max-sm:w-[200px] max-sm:-bottom-6 max-sm:h-[100px]`} />
                        </div>

                    </div>

                    <div className="flex m-4 max-sm:flex-col gap-3 ">

                        <div className="text-zinc-400 mx-10 bg-zinc-800 rounded-xl p-8 flex flex-col justify-center h-fit  hover:brightness-110 border border-white">

                            <div className="flex border-b my-2">
                                <h3 className="text-lg">Type: </h3>
                                <div className=''>
                                    {pokemon.types.map((item, index) => (
                                        <span key={index} className={`m-2 px-1 tracking-wider rounded-lg border-black border ${['type_' + item.type.name]}`}>{item.type.name}</span>

                                    ))}
                                </div>
                            </div>

                            <div className='text-lg border-b my-2'>
                                <div className='flex '>
                                    <h4>Height:</h4>
                                    <p className="text-white ml-2 ">{pokemon.height * 10} cm</p>
                                </div>
                                <div className='flex'>
                                    <h4>Weight:</h4>
                                    <p className="text-white ml-2 ">{pokemon.weight / 10} kg</p>
                                </div>
                            </div>

                            <div className="border-b my-2">{renderStats()}</div>


                            <h1 className="text-lg">Abilities:</h1>
                            <div className="grid grid-cols-2 text-white text-lg">
                                {pokemon.abilities.map((item, index) => (

                                    <span>{item.ability.name}</span>

                                ))}
                            </div>
                        </div>
                        <div className="text-zinc-400">
                            <DamageRelations typeData={typeData} typeClasses={typeClasses} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}