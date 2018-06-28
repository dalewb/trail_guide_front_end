import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSearchSubmit}>
        <label>
          Search:
          <input type="text" name="search" onChange={this.props.handleSearchChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

};

export default SearchForm;
