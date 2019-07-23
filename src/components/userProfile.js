import React, { Component } from 'react';
import Switch from "react-switch";
import NumericInput from 'react-numeric-input';

import 'stylesheets/userProfile.scss';

const types = ['cat', 'dog']

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = props.userProfile;
  }

  changeType() {
    let type = types.filter((type) => type !== this.state.typePreference).shift()
    this.setState({ typePreference: type })
  }

  ageChange(minMax, value) {
    let ageRange = this.state.ageRange
    ageRange[minMax] = value
    this.setState({ ageRange: ageRange })
  }

  render() {
    const profile = this.props.userProfile;

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
                  onColor={"#739ace"}
                  onChange={this.changeType.bind(this)}
                  checked={this.state.typePreference === 'cat'}
                  checkedIcon={false}
                  uncheckedIcon={false}
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
                  value={this.state.ageRange.min}
                />
                <NumericInput
                  className="max"
                  placeholder="max"
                  min={0}
                  max={50}
                  onChange={this.ageChange.bind(this, 'max')}
                  value={this.state.ageRange.max}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserProfile;
