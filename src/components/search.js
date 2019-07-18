import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "stylesheets/search.scss";

class Search extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        className="search pane"
      >
        {
          this.props.pets.map( (pet) => {
            return (
              <div className="pet" key={pet.id}>
                <figure>
                  <img alt={`${pet.type}: ${pet.name}`} src={pet.img} />
                </figure>
                <h3 className="name"> {pet.name}, {pet.age}yr, {pet.sex} </h3>
                <div className="description"> {pet.profile} </div>
              </div>
            )
          })
        }
      </Carousel>
    )
  }
}

export default Search;
