import React from 'react';
import { mount } from 'enzyme';
import SavedList from 'components/savedList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const fakeState = {
  userProfile: {
    profile: {
      id: 1001,
      profile: "fake profile",
      typePreference: "cat",
      ageRange: { min: 0, max: 20 }
    }
  },
  savedPets: {
    pets: [
      {
        "id": 1001,
        "type": "cat",
        "name": "fake cat",
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

describe("List", () => {
  let list, pet;

  beforeEach(() => {
    const mockStore = configureStore([]);
    const initialState = fakeState;
    const store = mockStore(initialState);

    list = mount(
      <Provider store={store}>
        <SavedList/>
      </Provider>
    );
    pet = list.find('li').first();
  })

  it("has the right number of elements", () => {
    expect(list.find('li').length).toBe(2);
  })

  it("has the right elements", () => {
    expect(list.find('li').first().find('.name').text()).toBe("fake cat, 8yr, M");
  })
})
