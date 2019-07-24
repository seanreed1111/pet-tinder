function savedPetsReducer(state = { pets: [] }, action) {
  switch(action.type) {
    case 'SAVE_PET':
      return { pets: state.pets.concat([action.pet]) };
    default:
      return state;
  }
}

export default savedPetsReducer;
