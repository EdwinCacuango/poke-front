import React from "react";
import { Link } from "react-router-dom";

const PokemonDetail = ({
  image,
  title,
  description,
  type,
  evolution,
  height,
  weight,
}) => {
  return (
    <>
      <div>
        <img src={image} alt={`${title} image`} />
      </div>
      <div>
        <h1>{title}</h1>
        <div>
          <p>Descripción: {description}</p>
          <p>Tipo: {type}</p>
          <p>Evolución: {evolution}</p>
          <p>Altura: {height} m</p>
          <p>Peso: {weight} kg</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </>
  );
};

export default PokemonDetail;
