import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import Search from './containers/Search';
import UserPosts from './containers/UserPosts';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MapContainer from './components/MapContainer'
import LocationContainer from './containers/LocationContainer'
import CreateCommodity from './components/CreateCommodity'
import HomeContainer from './containers/HomeContainer'

class App extends Component {
  state = {
    allLocations: [],
    allCommodities: [],
    userLocations: [],
    userCommodities: [],
    user: {},
  }

  componentDidMount() {
    this.fetchAllInfo()
  }

  fetchAllInfo = () => {
    this.fetchBookings()
    this.fetchPosts()
  }

  // fetchUser = () => {
  //   fetch(`http://localhost:3000/api/v1/users/${user.id}`)
  //   .then(res => res.json())
  //   .then(json => this.setState({
  //     user: json.data
  //   }))
  // }
  //
  // search user by username once entered, match password, get all info.

  fetchBookings = () => {
    fetch(`http://localhost:3000/api/v1/${1}/bookings/`)
    .then(res => res.json())
    .then(json => this.setState({
      userLocations: json
    }))
  }

  fetchPosts = () => {
    fetch(`http://localhost:3000/api/v1/${1}/posts/`)
    .then(res => res.json())
    .then(json => this.setState({
      userCommodities: json
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://images-na.ssl-images-amazon.com/images/I/412G%2B3Q49RL.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Trail Angels</h1>
          <Button size="small" color="primary">
            <Link to="/map">
              Map
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/login">
              Log In
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/register">
              Register
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/home">
              Home Page
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/posts">
              View Your Posts
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/search">
              Search Items
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/create_commodity">
              Create Custom Commodity
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/locations">
              Search Locations
            </Link>
          </Button>
        </header>
        <div>
          <Route path="/home" component={HomeContainer}/>
          <Route path="/map" component={MapContainer}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegistrationForm}/>
          <Route path="/posts" component={UserPosts}/>
          <Route path="/search" component={Search}/>
          <Route path="/create_commodity" component={CreateCommodity}/>
          <Route path="/locations" component={LocationContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
