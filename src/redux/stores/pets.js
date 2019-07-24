function petsReducer(state = { pets: [] }, action) {
  switch(action.type) {
    case 'ADD_PETS':
      return { pets: state.pets.concat(action.pets) };
    case 'REMOVE_FIRST_PET':
      return { pets: state.pets.slice(1)}
    default:
      return state;
  }
}

export default petsReducer;
