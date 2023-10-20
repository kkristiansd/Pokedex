import React from 'react';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const imageUrl = pokemon.sprites.front_default;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
