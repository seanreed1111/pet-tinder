import React, { Component, Fragment } from 'react';
import 'stylesheets/pet.scss'

class Pet extends Component {
  render() {
    return (
      <Fragment>
        <figure>
          <img alt={`${this.props.pet.type}: ${this.props.pet.name}`} src={this.props.pet.img} />
        </figure>
        <div className="info">
          <h3 className="name">{`${this.props.pet.name}, ${this.props.pet.age}yr, ${this.props.pet.sex}`}</h3>
          <div className="description">{this.props.pet.profile}</div>
        </div>
      </Fragment>
    )
  }
}

export default Pet;
