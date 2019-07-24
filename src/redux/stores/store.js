import { combineReducers, createStore } from 'redux'
import petsReducer from './pets.js';
import userProfileReducer from './userProfile.js';
import savedPetsReducer from './savedPets.js';

const reducer = combineReducers({
  pets: petsReducer,
  userProfile: userProfileReducer,
  savedPets: savedPetsReducer
});

const store = createStore(reducer);

export default store;
