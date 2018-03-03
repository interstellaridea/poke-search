import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PokemonReducer from './reducer_pokemon';

const rootReducer = combineReducers({
  form: formReducer,
  pokemon: PokemonReducer,
});

export default rootReducer;
