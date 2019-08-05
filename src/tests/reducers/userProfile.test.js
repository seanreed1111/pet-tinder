import { default as reducer } from 'redux/reducers/userProfile';
import { setProfile, updateAgeRange, updateType } from 'redux/actions/userProfile';

const basicProfile = {
  ageRange: {min: 100, max: -1},
  id: 5000,
  profile: "lorem ipsum",
  typePreference: "dog"
}

const testProfile = { profile:
  {
    ageRange: {min: 5, max: 10},
    id: 1,
    profile: "fake profile",
    typePreference: "dog"
  }
}

describe("user profile reducer", () => {
  it('should start with a basic profile', () => {
    expect(reducer(undefined, {})).toEqual( { profile: basicProfile } );
  })

  it('set profile', () => {
    expect(reducer(testProfile, setProfile)).toEqual(testProfile);
  })

  it('updates age range', () => {
    let newProfile = reducer(undefined, updateAgeRange({ ageRange: {min: 20, max: 30}}));
    expect(newProfile.profile.ageRange).toEqual({min: 20, max: 30});
  })

  it('updates type', () => {
    let newProfile = reducer(undefined, updateType({ type: 'cat' }));
    expect(newProfile.profile.type).toEqual('cat');
  })
});
