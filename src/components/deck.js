import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFirstPet } from 'redux/actions/pets';
import { savePet } from 'redux/actions/savedPets';
import Swipeable from "react-swipy";
import Pet from 'components/pet';

import "stylesheets/deck.scss";

class Deck extends Component {
  remove(pet, dir) {
    if(dir === 'right') this.props.savePet(pet);
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
                <Swipeable onSwipe={this.remove.bind(this, pet)} >
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
  return { pets: state.pets.pets };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFirstPet: () => {
      dispatch(removeFirstPet())
    },
    savePet: (pet) => {
      dispatch(savePet(pet))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck)
