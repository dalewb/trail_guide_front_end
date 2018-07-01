import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import Item from '../components/Item'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      itemList: [],
      requestItem: null,
      requestDate: '',
      requestPriority: '',
    }
  }

  handleItemPurchase = (addToCartUrl) => {
    // redirect to CART?
  }

  createRequest = (item) => {
    const currentDate = new Date()
    fetch("http://localhost:3000/api/v1/posts", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        user_id: 1,
        commodity_id: item.data.id,
        date_needed: this.state.requestDate,
        date_posted: `${currentDate}`,
        priority: this.state.requestPriority
  		})
  	})
  		.then(res => res.json())
  		.then(json => {  this.setState({
          requestItem: null
        })})
  }

  createNewItem = () => {
    fetch("http://localhost:3000/api/v1/commodities", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        commodity_type: "Good",
  			name: this.state.requestItem.name,
        price: this.state.requestItem.salePrice,
        img_url: this.state.requestItem.mediumImage,
  		})
  	})
  		.then(res => res.json())
  		.then(json => this.createRequest(json))
    }

  handleRequestSubmit = (e) => {
    e.preventDefault()
    this.setState({
      requestDate: e.target.date_needed.value,
      requestPriority: e.target.priority.value,
    }, () => {this.createNewItem()})
  }

  renderRequestForm = () => {
    return (
      <form onSubmit={this.handleRequestSubmit}>
        <label>
          Date Needed:
          <input type="text" id="date_needed"></input>
        </label>
        <label>
          Priority Level:
          <input type="text" id="priority"></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }

  handleRequestClick= (item) => {
    this.setState({
      requestItem: item
    })
  }

  renderItems = () => {
    return this.state.itemList.map(item => {
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
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/search", {
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
        {this.state.requestItem ? this.renderRequestForm() : null}
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
