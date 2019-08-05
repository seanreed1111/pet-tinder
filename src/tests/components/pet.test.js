import React from 'react';
import { shallow } from 'enzyme';
import Pet from 'components/pet';

const fakePet = {
  "id": 1001,
  "type": "cat",
  "name": "Fake Pet",
  "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/patronus.jpg",
  "sex": "M",
  "age": 8,
  "profile": "Lorem Ipsum"
}

describe("Pet", () => {
  let pet;

  beforeEach(() => {
    pet = shallow(
      <Pet pet={fakePet}/>
    );
  })

  describe("elements", () => {
    it("has the right name", () => {
      expect(pet.find('.name').text()).toBe("Fake Pet, 8yr, M");
    })

    it("has a description", () => {
      expect(pet.find('.description').text()).toBe("Lorem Ipsum");
    })
  })
})
