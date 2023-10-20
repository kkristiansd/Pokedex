import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

function App() {
   // Define 'pokemonData' here, or fetch it from an API
   const pokemonData = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    // Add more Pokémon data
  ];
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Carousel data={pokemonData} />
    </div>
  );
}

export default App;
