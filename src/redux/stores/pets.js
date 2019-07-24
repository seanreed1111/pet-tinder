function petsReducer(state = { pets: [] }, action) {
  switch(action.type) {
    case 'ADD_PETS':
      return { pets: state.pets.concat(action.pets) };
    case 'REMOVE_PET':
      const p = state.pets.filter( pet => pet.id !== action.id )
      return { pets: p };
    default:
      return state;
  }
}

export default petsReducer;
