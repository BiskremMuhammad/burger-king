import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import the reducer
import reducer from './store/reducer';

axios.defaults.baseURL = 'http://readyhp.com/burger-king/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create burger king store
const mStore = createStore(reducer, composeEnhancers(applyMiddleware()));

const app = (
	<Provider store={mStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
