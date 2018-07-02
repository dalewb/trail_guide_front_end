import React, { Component } from 'react';
import './App.css';
import Search from './containers/Search';
import UserPosts from './containers/UserPosts';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
// import TestCard from './components/TestCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://images-na.ssl-images-amazon.com/images/I/412G%2B3Q49RL.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Trail Angels</h1>
        </header>
        <div>
          {/*<TestCard />*/}
          <LoginForm />
          <UserPosts />
          <Search />
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default App;
