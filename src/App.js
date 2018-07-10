import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import SearchContainer from './containers/SearchContainer';
import UserPosts from './containers/UserPosts';
import LoginContainer from './containers/LoginContainer';
import RegistrationForm from './components/RegistrationForm';
import MapContainer from './components/MapContainer';
import LocationContainer from './containers/LocationContainer';
import CreateCommodity from './components/CreateCommodity';
import HomeContainer from './containers/HomeContainer';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div class='App'>
        <Header as="h2" icon textAlign='center'>
          {/*<img src="https://images-na.ssl-images-amazon.com/images/I/412G%2B3Q49RL.jpg" className="App-logo" alt="logo" />*/}
          <Header as='h2' icon>
            <Icon name='map signs' size="small"/>
            Trail Angels
            <Header.Subheader>Linking Hikers with Angels, Wherever They May Roam.</Header.Subheader>
          </Header>
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
        </Header>
        <div>
          <Route path="/home" component={HomeContainer}/>
          <Route path="/map" component={MapContainer}/>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/register" component={RegistrationForm}/>
          <Route path="/posts" component={UserPosts}/>
          <Route path="/search" component={SearchContainer}/>
          <Route path="/create_commodity" component={CreateCommodity}/>
          <Route path="/locations" component={LocationContainer}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
