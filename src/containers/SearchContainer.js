import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import Item from '../components/Item'
import RequestForm from '../components/RequestForm'
import { connect } from 'react-redux';
import { Grid, Input, Button, Popup } from 'semantic-ui-react'

class SearchContainer extends Component {
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
    console.log("requestItem is initially", item);
    console.log("------");
    const currentDate = new Date()
    fetch("http://localhost:3000/api/v1/posts", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        user_id: 1,
        commodity_id: item.id,
        date_needed: this.state.requestDate,
        date_posted: `${currentDate}`,
        priority: this.state.requestPriority
  		})
  	})
  		.then(res => res.json())
  		.then(json => {this.setState({
          requestItem: null
        }, () => console.log("requestItem is now", this.state.requestItem))
      })
  }

  createNewItem = () => {
    console.log("Inside CreateNewItem, this.state is: ", this.state);
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
  		.then(json => {this.createRequest(json.data)})
    }

  handleRequestSubmit = (e) => {
    e.preventDefault()
    debugger
    this.setState({
      requestDate: e.target.date_needed.value,
      requestPriority: e.target.priority.value,
    }, () => {this.createNewItem()})
  }

  renderRequestForm = () => {
    return (
      <RequestForm handleRequestSubmit={this.handleRequestSubmit}/>
    )
  }

  renderSearchForm = () => {
    console.log("renderSearchForm, this is: ", this);
    return (
      <div>
        <Input
          onChange={this.handleSearchChange}
        />
        <Button onClick={this.handleSearchSubmit} content="Search"/>
      </div>
    )
  }

  handleRequestClick = (item) => {
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
          handleRequestSubmit={this.handleRequestSubmit}
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
    console.log("search rendered");
    console.log("state is", this.state);
    console.log("-------");
    return (
      <div>
        <h3>Search for Items!</h3>
        {this.state.requestItem !== null ? this.renderRequestForm() : null}
        {this.state.requestItem === null ? this.renderSearchForm() : null}


      <Grid padded columns={4}>
          {this.state.itemList && this.state.requestItem === null ? this.renderItems() : null}
      </Grid>
    </div>
    )
  }

};

export default connect()(SearchContainer);
