import React, { Component } from 'react';
import Modal from 'react-modal';
import Pet from 'components/pet';
import { connect } from 'react-redux';

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


const mapStateToProps = (state) => {
  console.log("savedList: ", state)
  return { savedPets: state.savedPets.pets };
}

function mapDispatchToProps(dispatch) {
  return {
    // addProfile: (profile) => {
    //   dispatch(addProfile(profile))
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedList)

