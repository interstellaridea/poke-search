import axios from 'axios';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export function searchPokemon(pokemon, cb) {
  const request = axios.get(`${ROOT_URL}/${pokemon}`)
  .then( (res) => cb(res.data) );
}