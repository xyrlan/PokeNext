export default function FilterButtons({ handleGenerationFilter, isGenerationFilterSelected, handleTypeFilter, isTypeFilterSelected }) {

    return (
        <>
            <div>
                <div className="text-zinc-500 group ">
                    <h1 className="select-none cursor-pointer group-hover:text-zinc-200 duration-300">Generations</h1>
                    <div className=" flex-col text-sm hidden group-hover:flex duration-500 gap-1">
                        <button className={isGenerationFilterSelected(0, 151) ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'} onClick={() => handleGenerationFilter(0, 151)}>Kanto</button>
                        <button className={isGenerationFilterSelected(152, 251) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(152, 251)}>Johto</button>
                        <button className={isGenerationFilterSelected(252, 386) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(252, 386)}>Hoenn</button>
                        <button className={isGenerationFilterSelected(387, 493) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(387, 493)}>Sinnoh</button>
                        <button className={isGenerationFilterSelected(494, 659) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(494, 659)}>Unova</button>
                        <button className={isGenerationFilterSelected(660, 721) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(660, 721)}>Kalos</button>
                        <button className={isGenerationFilterSelected(722, 809) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(722, 809)}>Alola</button>
                        <button className={isGenerationFilterSelected(810, 905) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(810, 905)}>Galar</button>
                        <button className={isGenerationFilterSelected(906, 1008) ? "text-zinc-200" : "hover:text-zinc-400 text-zinc-500"} onClick={() => handleGenerationFilter(906, 1008)}>Gen IX</button>
                    </div>
                </div>

                <div className="text-zinc-500 group ">
                    <h1 className="select-none cursor-pointer group-hover:text-zinc-200 duration-300">Types</h1>
                    <div className="flex-col text-sm hidden group-hover:flex duration-500 gap-1">
                        <button
                            onClick={() => handleTypeFilter('grass')}
                            className={isTypeFilterSelected('grass') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}>
                            Grass
                        </button>
                        <button
                            onClick={() => handleTypeFilter('fire')}
                            className={isTypeFilterSelected('fire') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Fire
                        </button>
                        <button
                            onClick={() => handleTypeFilter('water')}
                            className={isTypeFilterSelected('water') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Water
                        </button>
                        <button
                            onClick={() => handleTypeFilter('electric')}
                            className={isTypeFilterSelected('electric') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Electric
                        </button>
                        <button
                            onClick={() => handleTypeFilter('rock')}
                            className={isTypeFilterSelected('rock') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Rock
                        </button>
                        <button
                            onClick={() => handleTypeFilter('ground')}
                            className={isTypeFilterSelected('ground') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Ground
                        </button>
                        <button
                            onClick={() => handleTypeFilter('bug')}
                            className={isTypeFilterSelected('bug') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Bug
                        </button>
                        <button
                            onClick={() => handleTypeFilter('normal')}
                            className={isTypeFilterSelected('normal') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Normal
                        </button>
                        <button
                            onClick={() => handleTypeFilter('flying')}
                            className={isTypeFilterSelected('flying') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Flying
                        </button>
                        <button
                            onClick={() => handleTypeFilter('poison')}
                            className={isTypeFilterSelected('poison') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Poison
                        </button>
                        <button
                            onClick={() => handleTypeFilter('fighting')}
                            className={isTypeFilterSelected('fighting') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Fighting
                        </button>
                        <button
                            onClick={() => handleTypeFilter('psychic')}
                            className={isTypeFilterSelected('psychic') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Psychic
                        </button>
                        <button
                            onClick={() => handleTypeFilter('ghost')}
                            className={isTypeFilterSelected('ghost') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Ghost
                        </button>
                        <button
                            onClick={() => handleTypeFilter('ice')}
                            className={isTypeFilterSelected('ice') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Ice
                        </button>
                        <button
                            onClick={() => handleTypeFilter('dragon')}
                            className={isTypeFilterSelected('dragon') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Dragon
                        </button>
                        <button
                            onClick={() => handleTypeFilter('steel')}
                            className={isTypeFilterSelected('steel') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Steel
                        </button>
                        <button
                            onClick={() => handleTypeFilter('fairy')}
                            className={isTypeFilterSelected('fairy') ? 'text-zinc-200' : 'hover:text-zinc-400 text-zinc-500'}
                        >
                            Fairy
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}