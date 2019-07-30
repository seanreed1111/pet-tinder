import React from 'react';
import { mount } from 'enzyme';
import SavedList from 'components/savedList';
import { Provider } from 'react-redux';
import store from 'tests/mockStore';

describe("List", () => {
  let list, pet;

  beforeEach(() => {
    list = mount(
      <Provider store={store}>
        <SavedList/>
      </Provider>
    );
    pet = list.find('li').first();
  })

  describe("pet elements:", ()=> {
    it("has the correct count", () => {
      expect(list.find('li').length).toBe(2);
    });
  });

  describe("pet actions:", () => {
    it('removes a pet', () => {
      pet.find('.x').simulate('click');
      const action = store.getActions()[0];

      expect(action.type).toBe('UNSAVE_PET');
      expect(action.id).toBe(1001);
    });
  });
})
