import petsReducer from 'redux/reducers/pets';
import { addPets, removePet } from 'redux/actions/pets';

describe("pets reducer", () => {
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
    expect(petsReducer(undefined, {}).pets).toEqual([]);
  })

  it('should add a pet', () => {
    expect(petsReducer(undefined, addPets(pet)).pets).toEqual([pet]);
  })

  it('should remove a pet', () => {
    expect(petsReducer({ pets: [pet] }, removePet(pet)).pets).toEqual([pet]);
  })
});
