import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { fetchPets } from 'redux/actions/pets';
import { fetchUserProfile } from 'redux/actions/userProfile';
import App from './app';
import * as serviceWorker from './serviceWorker';


Promise.all([
  store.dispatch(fetchPets()),
  store.dispatch(fetchUserProfile())
])
  .then( () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      ,
      document.getElementById('root')
    );
  })
  .catch((err) => { console.log(err)})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
