import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import Item from '../components/Item'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      itemList: [],
    }
  }

  handleItemPurchase = (addToCartUrl) => {
    // redirect to CART
  }

  handleRequestClick= (item) => {
    debugger
    // persist Post.create to backend with fetch
    fetch("http://localhost:3000/api/v1/createrequest")
  }

  renderItems = () => {
    return this.state.itemList.map(item => {
      console.log(this)
      return (
        <Item
          info={item}
          key={item.itemId}
          handleItemPurchase={this.handleItemPurchase}
          handleRequestClick={this.handleRequestClick}
        />
      )
    })
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => {console.log(this.state)})
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/commodities", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
  			searchTerm: this.state.searchTerm
  		})
  	})
  		.then(res => res.json())
  		.then(json => this.setState({
        itemList: json.items
      }))
  }

  render() {
    return (
      <div>
        <SearchForm
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      {this.state.itemList.length > 0 ? this.renderItems() : null}
    </div>
    )
  }

};

export default Search;
