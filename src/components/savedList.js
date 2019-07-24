import React, { Component } from 'react';
import Modal from 'react-modal';
import Pet from 'components/pet';
import { connect } from 'react-redux';
import { unsavePet } from 'redux/actions/savedPets';

import 'stylesheets/savedList.scss';

class SavedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalPet: null
    };
  }

  openModal(pet, e) {
    this.setState({ modalPet: pet, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  unsavePet(petId, e) {
    this.props.unsavePet(petId);
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
          {
            this.props.savedPets.map( (pet) => {
              return (
                <li key={pet.id}>
                  <div
                    className="x"
                    onClick={this.unsavePet.bind(this, pet.id)}
                  >
                    X
                  </div>
                  <div
                    className="container"
                    onClick={this.openModal.bind(this, pet)}
                  >
                    <Pet pet={pet}/>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { savedPets: state.savedPets.pets };
}

function mapDispatchToProps(dispatch) {
  return {
    unsavePet: (petId) => {
      dispatch(unsavePet(petId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedList)

