import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PokemonDetail from "../components/Pokemon/PokemonDetail";
import styles from "./SinglePokemon.module.css";

const SinglePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getOnePoke() {
      const urlApi = `https://poke-api-concurso-kruger.onrender.com/api/one-poke/${id}`;
      const res = await fetch(urlApi);
      const data = await res.json();
      setPokemon(data[0]);
    }

    getOnePoke();
  }, []);

  return (
    <main>
      {pokemon ? (
        <div className={styles.container}>
          <PokemonDetail
            title={pokemon.name}
            image={pokemon.image}
            description={pokemon.description}
            type={pokemon.type}
            evolution={pokemon.evolution}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        </div>
      ) : (
        "Elementos por cargar"
      )}
    </main>
  );
};

export default SinglePokemon;
