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
    }
  }

  handleItemPurchase = (addToCartUrl) => {
    // redirect to CART
  }

  createRequest = (item) => {
    // need to pass good id in order to create a new request, but the handleRequestSubmit has the priority and
    // date needed.  Maybe set them in the state and then set everything to null after the creation?
  }

  createNewItem = (item) => {
    fetch("http://localhost:3000/api/v1/createitem", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        type: "Good",
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
    debugger
    let date_needed = e.target.date_needed.value
    let priority = e.target.priority.value

    // fetch to back end to persist post request
    // reset requestItem to null
    fetch("http://localhost:3000/api/v1/createrequest", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({

  		})
  	})
  		.then(res => res.json())
  		.then(json => this.setState({
        itemList: json.items
      }))

    this.setState({
      requestItem: null
    })
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
    // persist Post.create to backend with fetch

    this.setState({
      requestItem: item
    })
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
