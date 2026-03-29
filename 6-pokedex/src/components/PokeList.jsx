import { useEffect, useState } from "react";
import "./PokeList.css";
import { PokemonCard } from "./PokemonCard";

export const PokeList = () => {
  const [allPokemos, setAllPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0",
      );
      const data = await res.json();

      const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
          );
          return await res.json();
        }),
      );

      setAllPokemons(pokemons.sort((a, b) => a.id - b.id));
    };

    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemos.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id.toString().padStart(3, "0")}
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              type={pokemon.types[0].type.name}
              weight={pokemon.weight}
              height={pokemon.height}
              stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
              statsName={pokemon.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
