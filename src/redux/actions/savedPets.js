export const savePet = (pet) => ({
  type: 'SAVE_PET',
  pet: pet
})

export const unsavePet = (id) => ({
  type: 'UNSAVE_PET',
  id: id
})
