import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/';

const store = createStore(rootReducer,{},applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
