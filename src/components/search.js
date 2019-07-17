import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search pane">
        {
          this.props.pets.map( (pet) => {
            return (<div className="pet" key={pet.id}> {pet.name} </div>)
          })
        }
      </div>
    )
  }
}

export default Search;
