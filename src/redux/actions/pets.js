export const addPets = (pets) => ({
  type: 'ADD_PETS',
  pets: pets
})

export const removePet = (petId) => ({
  type: 'REMOVE_PET',
  id: petId
})
