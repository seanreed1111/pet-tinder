import React from 'react';
import { mount } from 'enzyme';
import SavedList from 'components/savedList';
import { Provider } from 'react-redux';
import store from 'redux/stores/store';

const fakeData = [
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
    "type": "dog",
    "name": "Riley",
    "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
    "sex": "M",
    "age": 5,
    "profile": "Dalor Amet"
  }
]

xdescribe("List", () => {
  let list, pet;

  beforeEach(() => {
    list = mount(
      <Provider store={store}>
        <SavedList pets={fakeData}/>
      </Provider>
    );
    pet = list.find('li').first();
    console.log(pet.text())
  })

  it("has the right number of elements", () => {
    expect(list.find('li').length).toBe(2);
  })

  it('displays a modal', () => {
    pet.simulate('click')
    expect(list.state('modalIsOpen')).toBe(true)
    expect(list.state('modalPet').name).toBe("Patronus")
  })
})
