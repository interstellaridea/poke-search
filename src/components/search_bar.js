import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    this.props.onSearch(e.search);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
      <Field
        name='search'
        component='input'
        type='text'
        placeholder='search for a pokemon'
      />
      <button
        type='submit'
        disabled={pristine || submitting} >
        Search
      </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'searchBar'
})(SearchBar);