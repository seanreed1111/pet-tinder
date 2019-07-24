export const addProfile = (profile) => ({
  type: 'ADD_PROFILE',
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
