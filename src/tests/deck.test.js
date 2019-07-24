import React from 'react';
import { mount } from 'enzyme';
import Deck from 'components/deck';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addPets, removePet } from 'redux/actions/pets';
import { savePet } from 'redux/actions/savedPets';

const fakeState = {
  userProfile: {
    profile: {
      id: 1001,
      profile: "fake profile",
      typePreference: "cat",
      ageRange: { min: 0, max: 20 }
    }
  },
  pets: {
    pets: [
      {
        "id": 1001,
        "type": "cat",
        "name": "Patronus",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/patronus.jpg",
        "sex": "M",
        "age": 8,
        "profile": "Lorem Ipsum"
      },
      {
        "id": 1002,
        "type": "cat",
        "name": "Riley",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
        "sex": "M",
        "age": 5,
        "profile": "Dalor Amet"
      }
    ]
  }
}

describe("Deck", () => {
  let deck;

  beforeEach(() => {
    const mockStore = configureStore([]);
    const initialState = fakeState;
    const store = mockStore(initialState);

    deck = mount(
      <Provider store={store}>
        <Deck/>
      </Provider>
    );
  })

  it('renders slides', () => {
    expect(deck.find('.pet').length).toBe(2);
  });

  describe("slide", () => {
    let slide;

    beforeEach(() => {
      slide = deck.find('.pet').first()
    })

    it("has the right name", () => {
      expect(slide.find('.name').text()).toBe("Patronus, 8yr, M")
    })

    it("has a description", () => {
      expect(slide.find('.description').text()).toBe("Lorem Ipsum")
    })
  })
})
