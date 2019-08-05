import { default as reducer } from 'redux/reducers/savedPets';
import { savePet, unsavePet } from 'redux/actions/savedPets';

describe("saved pets reducer", () => {
  const pet = {
    "id": 1002,
    "type": "cat",
    "name": "Riley",
    "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
    "sex": "M",
    "age": 5,
    "profile": "Dalor Amet"
  }

  it('should start with 0 pets', () => {
    expect(reducer(undefined, {}).pets).toEqual([]);
  })

  it('should save a pet', () => {
    expect(reducer(undefined, savePet(pet)).pets).toEqual([pet]);
  })

  it('should unsave a pet', () => {
    expect(reducer({ pets: [pet] }, unsavePet(pet)).pets).toEqual([pet]);
  })
});
