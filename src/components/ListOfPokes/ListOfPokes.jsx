import { useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import axios from "axios";
import styles from "./ListOfPokes.module.css";
const ListOfPokes = () => {
  const pokes = [1, 1];
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className={styles.list}>
      {pokes.map((poke) => (
        <Pokemon></Pokemon>
      ))}
    </div>
  );
};

export default ListOfPokes;
