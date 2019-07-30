import React from 'react';
import { mount } from 'enzyme';
import Deck, { mapStateToProps } from 'components/deck';
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

  afterEach(() => {
    store.clearActions()
  })

  it('renders slides', () => {
    expect(deck.find('.pet').length).toBe(2);
  })

  describe("actions", () => {
    it('accepts pets on click', () => {
      deck.find('.control.right').simulate('click');
      const save = store.getActions()[0];
      const remove = store.getActions()[1];
      expect(save.type).toBe("SAVE_PET");
      expect(save.pet.id).toBe(1001);
      expect(remove.type).toBe("REMOVE_PET");
    });

    it('rejects pets on click', () => {
      deck.find('.control.left').simulate('click');
      const remove = store.getActions()[0];
      expect(remove.type).toBe("REMOVE_PET");
    });
  })
})

describe('Deck', () => {
  const initialState = {
    userProfile: {
      profile: {
        typePreference: "smurf",
        ageRange: { min: -100, max: 100 }
      },
    },
    pets: {
      pets: [
        { "type": "cat", "age": 8 },
        { "type": "cat", "age": 5 },
        { "type": "cat", "age": -5 },
        { "type": "cat", "age": 25 },
        { "type": "dog", "age": 5 }
      ]
    }
  }

  it('filters type', () => {
    initialState.userProfile.profile.typePreference = 'cat';

    const pets = mapStateToProps(initialState).pets;

    expect(pets.length).toBe(4);
    expect(pets[0].type).toBe('cat')
  });

  it('filters age', () => {
    initialState.userProfile.profile.ageRange = { min: 0, max: 10 };

    const pets = mapStateToProps(initialState).pets;

    expect(pets.length).toBe(2);
    expect(pets[0].age).toBeLessThan(10)
    expect(pets[0].age).toBeGreaterThan(0)
  });
})
