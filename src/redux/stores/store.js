import { combineReducers, createStore } from 'redux'
import petsReducer from './pets.js';
import userProfileReducer from './userProfile.js';

const reducer = combineReducers({pets: petsReducer, userProfile: userProfileReducer});
const store = createStore(reducer);

export default store;
