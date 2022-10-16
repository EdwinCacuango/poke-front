import Header from "./components/Header/Header";
import ListOfPokes from "./components/ListOfPokes/ListOfPokes";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Poke Api Challenge</h1>
        <p>Esta es una pequeña descripción acerca de su página de pokemones</p>
        <ListOfPokes></ListOfPokes>
      </main>
    </div>
  );
}

export default App;
