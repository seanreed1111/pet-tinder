import React, { Component } from 'react';
import Switch from "react-switch";
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';
import { updateAgeRange, updateType } from 'redux/actions/userProfile';

import 'stylesheets/userProfile.scss';

const types = ['cat', 'dog'];

class UserProfile extends Component {
  changeType() {
    console.log(arguments)
    let type = types.filter((type) => type !== this.props.profile.typePreference).shift();
    this.props.updateType({ typePreference: type })
  }

  ageChange(minMax, value) {
    let ageRange = this.props.profile.ageRange;
    ageRange[minMax] = value;
    this.props.updateAgeRange({ ageRange: ageRange })
  }

  render() {
    const profile = this.props.profile;

    return (
      <div className="settings pane">
        <div className="userProfile">
          <h3>Adopter Profile</h3>
          <div className="description">{profile.profile}</div>
          <h3>Preferences</h3>
          <ul className="preferences">
            <li className="type">
              <span className="label">Animal</span>

              <div className="right">
                <span className="on">Cat</span>
                <Switch
                  onColor={"#aaa"}
                  offColor={"#739ace"}
                  onChange={this.changeType.bind(this)}
                  checked={profile.typePreference === 'dog'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  className="typeSwitch"
                />
                <span className="off">Dog</span>
              </div>
            </li>

            <li className="ageRange">
              <span className="label">Age</span>
              <div className="right">
                <NumericInput
                  className="min"
                  placeholder="min"
                  min={0}
                  max={50}
                  onChange={this.ageChange.bind(this, 'min')}
                  value={profile.ageRange.min}
                />
                <NumericInput
                  className="max"
                  placeholder="max"
                  min={0}
                  max={50}
                  onChange={this.ageChange.bind(this, 'max')}
                  value={profile.ageRange.max}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { profile: state.userProfile.profile };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAgeRange: (ageRange) => {
      dispatch(updateAgeRange(ageRange))
    },
    updateType: (typePreference) => {
      dispatch(updateType(typePreference))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

