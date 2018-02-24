import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchPokemon } from '../actions/index';
import SearchBar from '../components/search_bar';

class PokemonContainer extends Component {

  constructor(props) {
    super(props);
  }

  renderPokemon() {
    if (!this.props.pokemon) {
      return <h4>Enter a name to search...</h4>
    } else {
      const {
        id,
        name,
        weight,
        height,
        base_experience,
        sprites: { front_default: pic} = {}, // es6 destruct with name assign & def val if undefined
        types
      } = this.props.pokemon;
      
      return (
        <ul key={id}>
          <img height='50%' width='50%' alt={name} src={pic} />
          <li>name: {name}</li>
          <li>type: {types.map( ({type}) => `${type.name} ` )}</li>
          <li>weight: {weight}</li>
          <li>height: {height}</li>
          <li>base exp: {base_experience}</li>
        </ul>
      );
    }
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

function mapStateToProps({pokemon}) {
  return { pokemon };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchPokemon: searchPokemon }, dispatch);
} 
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);




