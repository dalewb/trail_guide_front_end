import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import Search from './containers/Search';
import UserPosts from './containers/UserPosts';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Map from './components/Map'
import LocationContainer from './containers/LocationContainer'

class App extends Component {
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
            <Link to="/locations">
              Search Locations
            </Link>
          </Button>
        </header>
        <div>
          <Route path="/map" component={Map}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegistrationForm}/>
          <Route path="/posts" component={UserPosts}/>
          <Route path="/search" component={Search}/>
          <Route path="/locations" component={LocationContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
