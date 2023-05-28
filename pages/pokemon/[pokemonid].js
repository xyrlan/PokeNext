import Image from "next/image"

import styles from "../../styles/Pokemon.module.css"



export const getStaticPaths = async () => {

    const maxPokemons = 1008
    const api = 'https://pokeapi.co/api/v2/pokemon'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {

        return {
            params: { pokemonid: (index + 1).toString() },
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

    return {
        props: { pokemon: data,
         },
        
    }
}

export default function Pokemon({ pokemon, params }) {

console.log(pokemon)

    // const paddedId =
    //     pokemon.id < 10 ? "00" + pokemon.id :
    //         pokemon.id < 100 ? "0" + pokemon.id :
    //             pokemon.id.toString();

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    return (
        <div className='flex flex-col justify-center items-center relative'>

            {pokemon.types.map((item, index) => (
                <Image
                    src={imageUrl}
                    width={200}
                    height={200}
                    alt={pokemon.name}
                    className={`left-0 absolute rounded-xl  
                    `}
                />
            ))}

            <h1 className={styles.title}>{pokemon.name}</h1>


            <div>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>

                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}