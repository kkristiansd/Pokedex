import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard.js';
import PokemonDetails from './PokemonDetails.js';
import './style.css';

const Carousel = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const nextPokemon = () => {
    setCurrentIndex((currentIndex + 1) % pokemonData.length);
  };

  const prevPokemon = () => {
    setCurrentIndex((currentIndex - 1 + pokemonData.length) % pokemonData.length);
  };

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        const data = response.data.results;
        // Fetch additional data for each Pokémon if needed
        const pokemonPromises = data.map(pokemon => axios.get(pokemon.url));
        Promise.all(pokemonPromises)
          .then(pokemonResponses => {
            const pokemonData = pokemonResponses.map(response => response.data);
            setPokemonData(pokemonData);
          });
      })
      .catch(error => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button onClick={prevPokemon}>Previous</button>
        <div className="pokemon-card-grid">
          {pokemonData.slice(currentIndex, currentIndex + 9).map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={handlePokemonClick} />
          ))}
        </div>
        <button onClick={nextPokemon}>Next</button>
      </div>
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
    </div>
  );
};

export default Carousel;
