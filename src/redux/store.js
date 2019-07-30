import { combineReducers, createStore } from 'redux'
import petsReducer from './reducers/pets.js';
import userProfileReducer from './reducers/userProfile.js';
import savedPetsReducer from './reducers/savedPets.js';

const reducer = combineReducers({
  pets: petsReducer,
  userProfile: userProfileReducer,
  savedPets: savedPetsReducer
});

const store = createStore(reducer);

export default store;
