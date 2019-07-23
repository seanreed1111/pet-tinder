import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Deck from 'components/deck';
import SavedList from 'components/savedList';
import UserProfile from 'components/userProfile';

import 'stylesheets/app.scss';

// used to get around not requesting from same domain
// FIXME: (allow this domain from server)
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const petCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
const petUrl = corsAnywhereUrl + petCorsUrl

const profileCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json'
const profileUrl = corsAnywhereUrl + profileCorsUrl

class App extends Component {
  state = {
    pets: null,
    userProfile: null
  }

  componentDidMount() {
    this.fetchPets()
    this.fetchUserProfile()
  }

  fetchPets() {
    fetch(petUrl)
      .then( (response) => response.json() )
      .then( (pets) => {
        this.setState({ pets: pets })
      })
      .catch((err) => { console.log(err)})
  }

  fetchUserProfile() {
    fetch(profileUrl)
      .then( (response) => response.json() )
      .then( (profile) => {
        this.setState({ userProfile: profile })
      })
      .catch((err) => { console.log(err)})
  }

  render() {
    return (
      <div className="app">
        <Tabs
          selectedTabClassName="selected"
          defaultIndex={2}
        >
          <div className="panels">
            <TabPanel>
              { this.state.pets &&
                <Deck pets={(this.state.pets || [])}/>
              }
            </TabPanel>

            <TabPanel>
              { this.state.pets &&
                <SavedList pets={(this.state.pets || [])}/>
              }
            </TabPanel>

            <TabPanel>
              { this.state.userProfile &&
                <UserProfile userProfile={this.state.userProfile}/>
              }
            </TabPanel>
          </div>

          <TabList className="tabs_list">
            <Tab className={['tab', 'search']} >Search</Tab>
            <Tab className={['tab', 'saved']} >Saved</Tab>
            <Tab className={['tab', 'settings']} >Settings</Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default App;
