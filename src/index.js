import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import postReducer from './reduxComponents/postReducer';
import bookingReducer from './reduxComponents/bookingReducer';
import loginReducer from './reduxComponents/loginReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



const store = createStore(
  combineReducers({
    postReducer,
    loginReducer,
    bookingReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

console.log("store.getState()",store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
