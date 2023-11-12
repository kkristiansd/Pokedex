import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { types, stats, abilities, height, weight } = pokemon;

  return (
    <div className="pokemon-details">
      <h3>Details for {pokemon.name}</h3>
      <div>
        <strong>Types:</strong> {types.map(type => type.type.name).join(', ')}
      </div>
      <div>
        <strong>Abilities:</strong> {abilities.map(ability => ability.ability.name).join(', ')}
      </div>
      <div>
        <strong>Stats:</strong>
        <ul>
          {stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Height:</strong> {height} dm
      </div>
      <div>
        <strong>Weight:</strong> {weight} hg
      </div>
    </div>
  );
};

export default PokemonDetails;
