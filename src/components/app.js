import React, { Component } from 'react';
import SearchForm from './searchForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    
  }

  onSubmit() {
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <p>PokeSearch</p>
        <SearchForm />
      </div>
    );
  }
}
