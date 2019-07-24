import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPets, removeFirstPet } from 'redux/actions/pets';
import Swipeable from "react-swipy";
import Pet from 'components/pet';

import "stylesheets/deck.scss";

const fakeData = [
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
    "type": "dog",
    "name": "Riley",
    "img": "https://s3-us-west-2.amazonaws.com/cozi-interview-dev/riley.jpg",
    "sex": "M",
    "age": 5,
    "profile": "Dalor Amet"
  }
]

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const petCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
const petUrl = corsAnywhereUrl + petCorsUrl;

class Deck extends Component {
  componentDidMount() {
    this.fetchPets()
  }

  fetchPets() {
    fetch(petUrl)
      .then( (response) => response.json() )
      .then( (pets) => {
        this.props.addPets(pets);
      })
      .catch((err) => { console.log(err)})
  }

  remove(dir) {
    this.props.removeFirstPet();
  }

  render() {
    return (
      <div className="deck pane">
        <button
          className="control left"
          onClick={this.remove.bind(this, 'left')}
        >
          Reject
        </button>

        <button
          className="control right"
          onClick={this.remove.bind(this, 'right')}
        >
          Accept
        </button>
        {
          this.props.pets.map( (pet, i) => {
            return (
              <div
                style={{zIndex: 100 - i}}
                className="pet full"
                key={pet.id}
              >
                <Swipeable onSwipe={this.remove.bind(this)} >
                  <Pet pet={pet}/>
                </Swipeable>
              </div>
            )
          })
        }
        <div className="empty">
          <h3 className="name">No more pets :(</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { pets: state.pets };
}

function mapDispatchToProps(dispatch) {
  return {
    addPets: (pets) => {
      dispatch(addPets(pets))
    },
    removeFirstPet: () => {
      dispatch(removeFirstPet())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck)

// const mapDispatchToProps = { increment, decrement, reset }

// export default Deck;
