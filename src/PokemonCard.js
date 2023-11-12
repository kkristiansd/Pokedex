import React, { useState } from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const imageUrl = pokemon.sprites.front_default;

  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <img src={imageUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
