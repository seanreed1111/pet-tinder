import React from 'react';
import { mount } from 'enzyme';
import Deck from 'components/deck';
import { Provider } from 'react-redux';
import store from './mockStore';

describe("Deck", () => {
  let deck;

  beforeEach(() => {
    deck = mount(
      <Provider store={store}>
        <Deck/>
      </Provider>
    );
  })

  it('renders slides', () => {
    expect(deck.find('.pet').length).toBe(2);
  })
})
