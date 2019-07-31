import React from 'react';
import { mount } from 'enzyme';
import UserProfile from 'components/userProfile';
import { Provider } from 'react-redux';
import store from './mockStore';

describe("UserProfile", () => {
  let profile;

  beforeEach(() => {
    profile = mount(
      <Provider store={store}>
        <UserProfile/>
      </Provider>
    );
  })

  describe("elements", () => {
    it("has a profile", () => {
      expect(profile.find('.description').text()).toBe('fake profile');
    })

    it("has the correct type", () => {
      const typeSwitch = profile.find('.typeSwitch').first();
      expect(typeSwitch.instance().props.checked).toBe(false);
    })

    it("has the correct min age", () => {
      const min = profile.find('.ageRange .min').first();
      expect(min.instance().props.value).toBe(0);
    })

    it("has the correct max age", () => {
      const max = profile.find('.ageRange .max').first();
      expect(max.instance().props.value).toBe(20);
    })
  });
})
