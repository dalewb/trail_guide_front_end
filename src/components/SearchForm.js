import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form>
        <label>
          Search:
          <input type="text" name="search" />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

};

export default SearchForm;
