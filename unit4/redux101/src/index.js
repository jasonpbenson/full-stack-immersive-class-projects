import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import store from redux
// the store essentially IS redux
import{ createStore } from 'redux';

// import provider component from react-redux
// so react and redux can communicate
// via "connect"
import { Provider } from 'react-redux';

// need master/root reducter to give to store
import reducers from './reducers/index';

// make a store for redux to use
// pass it reducers, which is the export of the root reducer
// the root reducer is a collection of little reducers returned

const theStore = createStore(reducers);

// provider is the component that makes connect work
// (connect is inside of the container)
// it takes a prop of store, which is the reduxStore
// 

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)
