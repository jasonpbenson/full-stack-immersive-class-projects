// master reducer
// manage state via little reducers

// masterReducer neither knows or cares about react

import { combineReducers } from 'redux';

// need to feed masterReducer:

import StudentReducer from './StudentReducer';

// build root reducer with combineReducers
// combineReducers comes from redux
// conbineReducers take 1 arg: an object
// properties of whatever the state should be called
// value of the reducer
const rootReducer = combineReducers({
    // the name of the state will be the prop used by react
    // 
    students: StudentReducer
})
export default rootReducer;