import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reduxComponents/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

console.log(store.getState());

ReactDOM.render(
  <Router>
    <Provider store={store}><App /></Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
