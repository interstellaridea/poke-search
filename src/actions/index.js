import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export function searchPokemon(pokemon) {
  const request = axios.get(`${ROOT_URL}/${pokemon}`)

  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: FETCH_POKEMON, payload: data })
    });
  };
}