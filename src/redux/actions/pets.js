// used to get around not requesting from same domain
// FIXME: (allow this domain from server)
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const petCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
const petUrl = corsAnywhereUrl + petCorsUrl;

export const addPets = (pets) => ({
  type: 'ADD_PETS',
  pets: pets
})

export const removePet = (petId) => ({
  type: 'REMOVE_PET',
  id: petId
})

export const fetchPets = () => {
  return function (dispatch) {
    return fetch(petUrl)
      .then( (response) => response.json() )
      .then( (pets) => {
        dispatch(addPets(pets));
      })
  }
}
