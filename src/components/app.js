import React, { Component } from 'react';
import PokemonContainer from '../containers/pokemon_container';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>PokeSearch</p>
        <PokemonContainer />
      </div>
    );
  }
}
