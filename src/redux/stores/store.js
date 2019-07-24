import { combineReducers, createStore } from 'redux'
import petsStore from './pets.js';

const reducer = petsStore;
const store = createStore(reducer);

export default store;
