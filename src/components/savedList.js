import React, { Component } from 'react';
import Pet from 'components/pet';
import 'stylesheets/savedList.scss'

class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="saved pane">
        <ul className="savedList">
          {
            this.state.pets.map( (pet) => {
              return (
                <li>
                  <Pet pet={pet}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default SavedList;
