import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import combineReducers from './reducers/index'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
      {/* <Route exact path ="/" component={()=><App {...props} />}/>  */}
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
