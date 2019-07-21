import React from 'react';
import { shallow } from 'enzyme';
import Search from 'components/search';

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

describe("Search", () => {
  let search;

  beforeEach(() => {
    search = shallow(<Search pets={fakeData}/>);
  })

  it('renders slides', () => {
    expect(search.find('.pet').length).toBe(2);
  });

  describe("slide", () => {
    let slide;

    beforeEach(() => {
      slide = search.find('.pet').first()
    })

    it("has the right name", () => {
      expect(slide.find('.name').text()).toBe("Patronus, 8yr, M")
    })

    it("has a description", () => {
      expect(slide.find('.description').text()).toBe("Lorem Ipsum")
    })
  })
})
