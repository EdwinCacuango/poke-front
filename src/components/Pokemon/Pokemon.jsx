import styles from "./Pokemon.module.css";
const Pokemon = ({ imgProfile, name, description, route }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={imgProfile} alt={`${name} photo`} />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={route}> Más detalles</a>
    </div>
  );
};

export default Pokemon;
