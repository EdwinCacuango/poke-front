import Header from "../components/Header/Header";
import ListOfPokes from "../components/ListOfPokes/ListOfPokes";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Poke Api Challenge</h1>
        <p className="description">
          Esta es una pequeña descripción acerca de su página de pokemones
        </p>
        <ListOfPokes />
      </main>
    </div>
  );
};

export default Home;
