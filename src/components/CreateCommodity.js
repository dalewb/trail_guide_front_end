import React, { Component } from 'react';

class CreateCommodity extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      type: '',
    }
  }

CreateCommodity = () => {
  fetch("http://localhost:3000/api/v1/bookings/locations/1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      latitude: lat,
      longitude: lon,
      description: description,
    })
  })
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log("On Change",this.state)})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("On Submit",this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create Custom Commodity!</h3><br />
        <label>
          Commodity Name:
          <input type="textarea" name="name" onChange={this.handleChange}></input>
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
