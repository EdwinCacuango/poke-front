import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import styles from "./ListOfPokes.module.css";

const ListOfPokes = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    async function fetchPokes() {
      const urlApi =
        "https://poke-api-concurso-kruger.onrender.com/api/pokemons";
      const res = await fetch(urlApi);
      const data = await res.json();

      setPokes(data);
    }

    fetchPokes();
  }, []);

  return (
    <div className={styles.list}>
      {pokes.map((poke) => {
        return (
          <Pokemon
            key={poke._id}
            name={poke.name}
            description={poke.description}
            imgProfile={poke.image}
            route={`/poke/${poke._id}`}
          ></Pokemon>
        );
      })}
    </div>
  );
};

export default ListOfPokes;
