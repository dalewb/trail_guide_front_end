import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSearchSubmit}>
        <label>
          Search:
          <input type="text" name="search" onChange={this.props.handleSearchChange}/>
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }

};

export default SearchForm;
