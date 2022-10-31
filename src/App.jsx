import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SinglePokemon from "./pages/SinglePokemon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poke/:id" element={<SinglePokemon />} />
    </Routes>
  );
}

export default App;
