// used to get around not requesting from same domain
// FIXME: (allow this domain from server)
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const profileCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';
const profileUrl = corsAnywhereUrl + profileCorsUrl;

export const setProfile = (profile) => ({
  type: 'SET_PROFILE',
  profile: profile
})

export const updateAgeRange = (ageRange) => ({
  type: 'UPDATE_AGE_RANGE',
  ageRange: ageRange
})

export const updateType = (typePreference) => ({
  type: 'UPDATE_TYPE',
  typePreference: typePreference
})

export const fetchUserProfile = () => {
  return function (dispatch) {
    fetch(profileUrl)
      .then( (response) => response.json() )
      .then( (profile) => {
        dispatch(setProfile(profile));
      })
      .catch((err) => { console.log(err)})
  }
}
