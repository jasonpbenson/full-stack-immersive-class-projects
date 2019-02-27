import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/rootReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxPromise from 'redux-promise';

// const theStore = createStore(reducers);--need middleware
const middleware = applyMiddleware(reduxPromise);
const theStore = middleware(createStore);
const theStoreWithMiddlewareAndReducers = theStore(reducers);

ReactDOM.render(
    <Provider store={theStoreWithMiddlewareAndReducers}>
        <App />
    </Provider>,
    document.getElementById('root')
);
