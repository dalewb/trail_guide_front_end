import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { fetchUserBookings } from './reduxComponents/bookingActions'
import { fetchUserPosts } from './reduxComponents/postActions'
import { fetchCommodities } from './reduxComponents/postActions'
import SearchContainer from './containers/SearchContainer';
import UserPosts from './containers/UserPosts';
import LoginContainer from './containers/LoginContainer';
import RegistrationForm from './components/RegistrationForm';
import MapContainer from './components/MapContainer';
import LocationContainer from './containers/LocationContainer';
import CreateCommodity from './components/CreateCommodity';
import HomeContainer from './containers/HomeContainer';
import MyLocationContainer from './containers/MyLocationContainer';
import { connect } from 'react-redux';
import { Header, Icon, Button } from 'semantic-ui-react';

class App extends Component {

  componentDidMount() {
    this.props.fetchUserBookings()
    this.props.fetchUserPosts()
    this.props.fetchCommodities()
  }

  render() {
    return (
      <div className='App'>
        <Header as="h2" icon textAlign='center'>
          {/*<img src="https://images-na.ssl-images-amazon.com/images/I/412G%2B3Q49RL.jpg" className="App-logo" alt="logo" />*/}
          <Header icon>
            <Icon name='map signs' size='tiny'/>
            Trail Guide
            <Header.Subheader><br />Plan Your Next Big Adventure</Header.Subheader>
          </Header>
          <Button size="small" color="black">
            <Link to="/map">
              Map
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/login">
              Log In
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/register">
              Register
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/home">
              Home Page
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/posts">
              View Your Items
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/myLocations">
              View Your Locations
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/search">
              Search Items
            </Link>
          </Button>
          <Button size="small" color="black">
            <Link to="/create_commodity">
              Create Custom Commodity
            </Link>
          </Button>
          <Button size="small" color="black">
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
          <Route path="/myLocations" component={MyLocationContainer}/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserBookings: () => dispatch(fetchUserBookings()),
    fetchUserPosts: () => dispatch(fetchUserPosts()),
    fetchCommodities: () => dispatch(fetchCommodities()),
  }
}

export default connect(null, mapDispatchToProps)(App);
