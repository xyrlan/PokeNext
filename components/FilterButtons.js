import usePokemonFilter from "./usePokemonFilter";



export default function FilterButtons({ handleGenerationFilter, isGenerationFilterSelected, handleTypeFilter, isTypeFilterSelected, pokemonData }) {

    const generationFilters = [
        { start: 0, end: 151, label: 'Kanto' },
        { start: 152, end: 251, label: 'Johto' },
        { start: 252, end: 386, label: 'Hoenn' },
        { start: 387, end: 493, label: 'Sinnoh' },
        { start: 494, end: 659, label: 'Unova' },
        { start: 660, end: 721, label: 'Kalos' },
        { start: 722, end: 809, label: 'Alola' },
        { start: 810, end: 905, label: 'Galar' },
        { start: 906, end: 1008, label: 'Gen IX' },
    ];

    return (
        <>
            <div>
                <h1 className="text-white text-xl">Filters</h1>
                <div className="text-zinc-500 group ">
                    <h1 className="select-none cursor-pointer group-hover:text-zinc-200 duration-300">Generations</h1>
                    <div className=" flex-col text-sm hidden group-hover:flex duration-500 gap-1 max-sm:absolute z-50 max-sm:bg-zinc-900 w-[70%] rounded-xl p-2">
                        {generationFilters.map((filter) => (
                            <button
                                key={`${filter.start}-${filter.end}`}
                                className={isGenerationFilterSelected(filter.start, filter.end) ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                                onClick={() => handleGenerationFilter(filter.start, filter.end)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-zinc-500 group ">
                    <h1 className="select-none cursor-pointer group-hover:text-zinc-200 duration-300">Types</h1>
                    <div className="flex-col text-sm hidden group-hover:flex duration-500 gap-1 max-sm:absolute z-50 max-sm:bg-zinc-900 w-[70%] rounded-xl p-2">

                        {pokemonData.map((pokemon) => pokemon.types.map((type) => type))
                            .flat()
                            .filter((value, index, self) => self.indexOf(value) === index)
                            .map((type) => (
                                <button
                                    key={type}
                                    onClick={() => handleTypeFilter(type)}
                                    className={isTypeFilterSelected(type) ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                                >
                                    {type}
                                </button>
                            ))}
                    </div>
                </div>
            </div>

        </>
    )
}