import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommodities } from '../reduxComponents/postActions'
import { Form, Button, Card, Icon, Label } from 'semantic-ui-react';

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
    .then(json => this.props.fetchCommodities())
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
    alert("Commodity Created")
  }

  render() {
    return (
      <div>
      <Card.Group centered="true">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
            <input type="text" name="date_needed" placeholder="Date Needed" onChange={this.handleChange} />
            </Form.Field>
            <Form.Group inline centered>
              <label style={{color: 'white'}}>Type: </label>
                <label style={{color: 'white'}} >Item</label>
                  <input type="radio" label="Item"  name="type" value="item" onChange={this.handleChange} />
                <label style={{color: 'white'}} >Service</label>
                  <input type="radio" label="Service"  name="type" value="service" onChange={this.handleChange} />
            </Form.Group>
            <Button type="submit" value="Submit">Submit</Button>
        </Form>
      </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userCommodities: state.postReducer.userCommodities,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCommodities: () => dispatch(fetchCommodities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommodity);
