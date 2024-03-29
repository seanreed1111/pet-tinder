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

  openModal(pet) {
    this.setState({ modalPet: pet, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  unsavePet(petId, e) {
    e.stopPropagation();
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
          { this.props.savedPets.length ? (
              this.props.savedPets.map( (pet) => {
                return (
                  <li
                    onClick={this.openModal.bind(this, pet)}
                    key={pet.id}
                  >
                    <div
                      className="x"
                      onClick={this.unsavePet.bind(this, pet.id)}
                    >
                      X
                    </div>
                    <Pet pet={pet}/>
                  </li>
                )
              })
            ) : (
              <h3 style={{textAlign: 'center'}}>Save Some Pets!</h3>
            )
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

