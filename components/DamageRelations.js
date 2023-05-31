import Image from "next/image"

export default function DamageRelations({ typeData, typeClasses }) {





    const renderDamageTypes = (types) => {
        return (
            <div className="grid xl:grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 ">
                {types
                    .filter((damage, damageIndex, damageArray) =>
                        damageArray.findIndex((d) => d.name === damage.name) === damageIndex
                    )
                    .map((damage) => (
                        <div className={`p-1 flex flex-col items-center text-white text-sm `} key={damage.name}>
                            <Image
                                className={`p-1 type_${damage.name} ${typeClasses[damage.name]} rounded-full shadow`}
                                src={`/images/type-icons/${damage.name}.svg`}
                                width={30}
                                height={30}
                                alt={damage.name}
                            />
                            <p>{damage.name}</p>
                        </div>
                    ))}
            </div>
        );
    };

    return (
        <div>
            <div className="flex m-1 ">
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>200% Damage From:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.double_damage_from))}
                </div>
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>200% Damage To:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.double_damage_to))}
                </div>
            </div>
            <div className="flex m-1">
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>50% Damage From:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.half_damage_from))}
                </div>
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>50% Damage To:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.half_damage_to))}
                </div>
            </div>
            <div className="flex m-1">
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>0% Damage From:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.no_damage_from))}
                </div>
                <div className="bg-zinc-800 border rounded-xl hover:brightness-110 p-2 ml-1">
                    <h3>0% Damage To:</h3>
                    {renderDamageTypes(typeData.flatMap((item) => item.no_damage_to))}
                </div>
            </div>
        </div>
    );
}