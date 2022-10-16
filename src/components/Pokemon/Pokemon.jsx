const Pokemon = ({ imgProfile, name, description, route }) => {
  return (
    <div>
      <div>
        <img src={imgProfile} alt={`${name} photo`} />
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
      <a href={route}> Más detalles</a>
    </div>
  );
};

export default Pokemon;
