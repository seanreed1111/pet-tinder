const basicProfile = {
  ageRange: {min: 100, max: -1},
  id: 5000,
  profile: "lorem ipsum",
  typePreference: "dog"
}

function userProfileReducer(state = { profile: basicProfile }, action) {
  switch(action.type) {
    case 'ADD_PROFILE':
      return { profile: action.profile };
    case 'UPDATE_AGE_RANGE':
      return { profile: { ...state.profile, ...action.ageRange } };
    case 'UPDATE_TYPE':
      return { profile: { ...state.profile, ...action.typePreference } };
    default:
      return state;
  }
}

export default userProfileReducer;
