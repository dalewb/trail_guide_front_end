import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCommodity extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      type: '',
      date_needed: '',
    }
  }

  createPost = (commodity_id) => {
    let date_posted = new Date()
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        commodity_id: commodity_id,
        date_needed: this.state.date_needed,
        date_posted,
      }),
    })
    .then(res => res.json())
    .then(json => console.log("Create Post:",json))
  }

  createCommodity = () => {
    console.log("In Fetch");
    fetch("http://localhost:3000/api/v1/commodities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        commodity_type: this.state.commodity_type,
      })
    })
      .then(res => res.json())
      .then(json => {this.createPost(json.data.id)})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log("On Change",this.state)})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createCommodity()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create Custom Commodity!</h3><br />
        <label>
          Commodity Name:
          <input type="text" name="name" onChange={this.handleChange}></input>
        </label><br />
        <label>
          Date Needed:
          <input type="text" name="date_needed" onChange={this.handleChange}></input>
        </label>
        <div>
          Commodity Type:
          <label>
            <input type="radio" name="type" value="item" onChange={this.handleChange}></input>
            Item
          </label>
          <label>
            <input type="radio" name="type" value="service" onChange={this.handleChange}></input>
            Service
          </label><br />
          <input type="submit"></input>
        </div>
      </form>
    )
  }
}

export default CreateCommodity;
