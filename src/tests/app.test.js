import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import { Provider } from 'react-redux';
import store from 'redux/stores/store';

it('app', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
