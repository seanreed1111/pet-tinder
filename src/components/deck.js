import React, { Component } from 'react';
import Swipeable from "react-swipy"

import "stylesheets/deck.scss";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { pets: props.pets }
  }

  remove(dir) {
    let pet = this.state.pets.shift()
    this.setState({ pets: this.state.pets })
  }

  render() {
    return (
      <div className="deck pane">
        {
          this.state.pets.map( (pet, i) => {
            return (
              <div
                style={{zIndex: 100 - i}}
                className="pet"
                key={pet.id}
              >
                <Swipeable onSwipe={this.remove.bind(this)} >
                    <figure>
                      <img alt={`${pet.type}: ${pet.name}`} src={pet.img} />
                    </figure>
                    <h3 className="name">{`${pet.name}, ${pet.age}yr, ${pet.sex}`}</h3>
                    <div className="description">{pet.profile}</div>
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

export default Deck;