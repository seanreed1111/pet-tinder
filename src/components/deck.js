import React, { Component } from 'react';
import Swipeable from "react-swipy";
import Pet from 'components/pet';

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

export default Deck;
