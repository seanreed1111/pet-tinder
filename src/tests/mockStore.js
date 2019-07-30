import fakeState from './fakeState.js';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = fakeState;
const store = mockStore(initialState);

export default store;
