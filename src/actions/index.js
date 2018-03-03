import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export function searchPokemon(pokemon) {
  const request = axios.get(`${ROOT_URL}/${pokemon}`);
  return { type: FETCH_POKEMON, payload: request };
}