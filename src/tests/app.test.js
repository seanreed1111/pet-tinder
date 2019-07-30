import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import { Provider } from 'react-redux';
import store from 'tests/mockStore';

it('app', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
