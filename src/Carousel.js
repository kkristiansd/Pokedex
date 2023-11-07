import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard.js';
import './style.css';

const Carousel = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPokemon = () => {
    setCurrentIndex((currentIndex + 1) % pokemonData.length);
  };

  const prevPokemon = () => {
    setCurrentIndex((currentIndex - 1 + pokemonData.length) % pokemonData.length);
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
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
        <div className="pokemon-card-stack">
          <PokemonCard pokemon={pokemonData[(currentIndex - 1 + pokemonData.length) % pokemonData.length]} />
          <PokemonCard pokemon={pokemonData[currentIndex]} />
          <PokemonCard pokemon={pokemonData[(currentIndex + 1) % pokemonData.length]} />
        </div>
        <button onClick={nextPokemon}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
