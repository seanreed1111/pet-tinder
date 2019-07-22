import React, { Component } from 'react';
import Swipeable from "react-swipy"

import "stylesheets/search.scss";

class Search extends Component {
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
      <div className="search pane">
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
      </div>
    )
  }
}

export default Search;
