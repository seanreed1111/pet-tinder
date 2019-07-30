const random = (array) => {
  array[Math.floor(Math.random() * array.length)]
}

const types = ['cat', 'dog'];
const sexes = ['M', 'F'];

export const fakePet = (props) => {
  const type = props.type || random(types);
  const sex = props.sex || random(sexes);
  const age = props.age || Math.floor(Math.random() * 30);
  const name = props.name || `Fake ${type}`;
  const id = Math.floor(Math.random() * 1000)

  return {
    "id": id,
    "type": type,
    "name": name,
    "img": "fakePet.jpg",
    "sex": sex,
    "age": age,
    "profile": "Lorem Ipsum"
  }
}

export const fakePets = (petProps) => {
  return petProps.map((props) => {
    return fakePet(props);
  })
}

