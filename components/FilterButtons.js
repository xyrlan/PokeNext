export default function FilterButtons({ handleGenerationFilter, isGenerationFilterSelected, handleTypeFilter, isTypeFilterSelected }) {

    return (
        <>
            <div className="text-zinc-500">
            <h1>Generations</h1>
            <div className="flex flex-col text-sm">
                <button className={isGenerationFilterSelected(0, 151) ? 'text-red-500' : 'text-white'} onClick={() => handleGenerationFilter(0, 151)}>Gen1</button>
                <button className={isGenerationFilterSelected(152, 251) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(152, 251)}>Gen2</button>
                <button className={isGenerationFilterSelected(252, 386) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(252, 386)}>Gen3</button>
                <button className={isGenerationFilterSelected(387, 493) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(387, 493)}>Gen4</button>
                <button className={isGenerationFilterSelected(494, 659) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(494, 659)}>Gen5</button>
                <button className={isGenerationFilterSelected(660, 721) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(660, 721)}>Gen6</button>
                <button className={isGenerationFilterSelected(722, 809) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(722, 809)}>Gen7</button>
                <button className={isGenerationFilterSelected(810, 905) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(810, 905)}>Gen8</button>
                <button className={isGenerationFilterSelected(906, 1008) ? "text-red-500" : "text-white"} onClick={() => handleGenerationFilter(906, 1008)}>Gen9</button>
            </div>
            <h1>Types</h1>
            <div className="flex flex-col text-sm">
                <button
                    onClick={() => handleTypeFilter('grass')}
                    className={isTypeFilterSelected('grass') ? 'text-red-500' : 'text-white'}>
                    Grass
                </button>
                <button
                    onClick={() => handleTypeFilter('fire')}
                    className={isTypeFilterSelected('fire') ? 'text-red-500' : 'text-white'}
                >
                    Fire
                </button>
                <button
                    onClick={() => handleTypeFilter('water')}
                    className={isTypeFilterSelected('water') ? 'text-red-500' : 'text-white'}
                >
                    Water
                </button>
                <button
                    onClick={() => handleTypeFilter('electric')}
                    className={isTypeFilterSelected('electric') ? 'text-red-500' : 'text-white'}
                >
                    Electric
                </button>
                <button
                    onClick={() => handleTypeFilter('rock')}
                    className={isTypeFilterSelected('rock') ? 'text-red-500' : 'text-white'}
                >
                    Rock
                </button>
                <button
                    onClick={() => handleTypeFilter('ground')}
                    className={isTypeFilterSelected('ground') ? 'text-red-500' : 'text-white'}
                >
                    Ground
                </button>
                <button
                    onClick={() => handleTypeFilter('bug')}
                    className={isTypeFilterSelected('bug') ? 'text-red-500' : 'text-white'}
                >
                    Bug
                </button>
                <button
                    onClick={() => handleTypeFilter('normal')}
                    className={isTypeFilterSelected('normal') ? 'text-red-500' : 'text-white'}
                >
                    Normal
                </button>
                <button
                    onClick={() => handleTypeFilter('flying')}
                    className={isTypeFilterSelected('flying') ? 'text-red-500' : 'text-white'}
                >
                    Flying
                </button>
                <button
                    onClick={() => handleTypeFilter('poison')}
                    className={isTypeFilterSelected('poison') ? 'text-red-500' : 'text-white'}
                >
                    Poison
                </button>
                <button
                    onClick={() => handleTypeFilter('fighting')}
                    className={isTypeFilterSelected('fighting') ? 'text-red-500' : 'text-white'}
                >
                    Fighting
                </button>
                <button
                    onClick={() => handleTypeFilter('psychic')}
                    className={isTypeFilterSelected('psychic') ? 'text-red-500' : 'text-white'}
                >
                    Psychic
                </button>
                <button
                    onClick={() => handleTypeFilter('ghost')}
                    className={isTypeFilterSelected('ghost') ? 'text-red-500' : 'text-white'}
                >
                    Ghost
                </button>
                <button
                    onClick={() => handleTypeFilter('ice')}
                    className={isTypeFilterSelected('ice') ? 'text-red-500' : 'text-white'}
                >
                    Ice
                </button>
                <button
                    onClick={() => handleTypeFilter('dragon')}
                    className={isTypeFilterSelected('dragon') ? 'text-red-500' : 'text-white'}
                >
                    Dragon
                </button>
                <button
                    onClick={() => handleTypeFilter('steel')}
                    className={isTypeFilterSelected('steel') ? 'text-red-500' : 'text-white'}
                >
                    Steel
                </button>
                <button
                    onClick={() => handleTypeFilter('fairy')}
                    className={isTypeFilterSelected('fairy') ? 'text-red-500' : 'text-white'}
                >
                    Fairy
                </button>
            </div>

            </div>
        </>
    )
}