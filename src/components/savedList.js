import React, { Component } from 'react';
import Modal from 'react-modal';
import Pet from 'components/pet';
import 'stylesheets/savedList.scss'

class SavedList extends Component {
  constructor(props) {
    super(props);
    let s = {
      modalIsOpen: false,
      modalPet: null
    };
    this.state = {...s, ...props};
  }

  openModal(pet, e) {
    this.setState({ modalPet: pet, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="saved pane">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
        >
          <div className="pet full">
            <Pet pet={this.state.modalPet}/>
          </div>
        </Modal>

        <ul className="savedList">
          { this.state.pets &&
            this.state.pets.map( (pet) => {
              return (
                <li onClick={this.openModal.bind(this, pet)} key={pet.id}>
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
