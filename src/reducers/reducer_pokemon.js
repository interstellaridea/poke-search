import { FETCH_POKEMON } from '../actions/index';

const INIT_STATE = null;

export default function( state = INIT_STATE , action ) {
  switch(action.type) {
    
    case FETCH_POKEMON:
      return action.payload;

    default:
      return state;
  }
}