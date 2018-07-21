import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore } from 'redux'
import reducer from './reducers/index'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Route exact path ="/" component={App}/> 
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
