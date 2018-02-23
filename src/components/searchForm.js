import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(e.search);
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
  form: 'search'
})(SearchForm);