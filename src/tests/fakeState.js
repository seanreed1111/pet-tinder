const fakeState = {
  userProfile: {
    profile: {
      id: 1001,
      profile: "fake profile",
      typePreference: "cat",
      ageRange: { min: 0, max: 20 }
    }
  },
  savedPets: {
    pets: [
      {
        "id": 1001,
        "type": "cat",
        "name": "fake cat",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/patronus.jpg",
        "sex": "M",
        "age": 8,
        "profile": "Lorem Ipsum"
      },
      {
        "id": 1002,
        "type": "cat",
        "name": "Riley",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
        "sex": "M",
        "age": 5,
        "profile": "Dalor Amet"
      }
    ]
  },
  pets: {
    pets: [
      {
        "id": 1001,
        "type": "cat",
        "name": "Patronus",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/patronus.jpg",
        "sex": "M",
        "age": 8,
        "profile": "Lorem Ipsum"
      },
      {
        "id": 1002,
        "type": "cat",
        "name": "Riley",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
        "sex": "M",
        "age": 5,
        "profile": "Dalor Amet"
      },
      {
        "id": 1003,
        "type": "dog",
        "name": "Fake Dog",
        "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
        "sex": "M",
        "age": 5,
        "profile": "Dalor Amet"
      }
    ]
  }
}

export default fakeState;
