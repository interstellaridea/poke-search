import _ from 'lodash';
// Catch action: FETCH_POKEMON and massage api data
// to be cleaner

export default function({dispatch}) {
  return next => action => {
    
    if (action.type === 'FETCH_POKEMON' && action.payload.then) {

      console.log('just made api request...')

      action.payload.then( function(response) {
        
        console.log(`api response came back..`);

        const { id, name, weight, height, base_experience,
          sprites: { front_default: pic} = {}, // es6 destruct with name assign & def val if undefined
          types } = response.data;

        const stats = response.data.stats.map((stat) => {
          let {stat: {name}} = stat; // get name prop from nestted obj
          let s = _.pick(stat, ['effort', 'base_stat', name])
          return {spec: name, ...s} 
        });

        // concat new clean data and dispatch same action but with cleaner payload
        const newPayload = { id, name, weight, height, base_experience, pic, types, stats };
        return dispatch({ ...action, payload: newPayload });
      
      })

      .catch( (req) => console.error(`API FETCHING ERROR: ${req}`))

    } else {
      return next(action);
    }
  }
}