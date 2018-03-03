import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchPokemon, isLoading } from '../actions/index';
import SearchBar from '../components/search_bar';

import PokeRender from '../components/poke_render';

class PokemonContainer extends Component {

  constructor(props) {
    super(props);
  }

  renderPokemon() {
    return this.props.pokemon ? <PokeRender data = { this.props.pokemon } /> : <h4>Enter a name to search...</h4>
  }

  render() {
    return(
      <div>
      <SearchBar onSearch={ e => this.props.searchPokemon(e) } />
      <h2>PokemonList</h2>
      <ul>
        { this.renderPokemon() }
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pokemon: state.pokemon };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchPokemon: searchPokemon }, dispatch);
} 
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);




