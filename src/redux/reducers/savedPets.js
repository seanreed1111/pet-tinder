function savedPetsReducer(state = { pets: [] }, action) {
  switch(action.type) {
    case 'SAVE_PET':
      return { pets: state.pets.concat([action.pet]) };
    case 'UNSAVE_PET':
      const p =  state.pets.filter((pet) => {
        return pet.id !== action.id
      })
      return { pets: p };
    default:
      return state;
  }
}

export default savedPetsReducer;
