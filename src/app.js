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
const petUrl = corsAnywhereUrl + petCorsUrl;

const profileCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';
const profileUrl = corsAnywhereUrl + profileCorsUrl;

const tabNames = ['search', 'saved', 'settings'];
const defaultTab = 0;

class App extends Component {
  state = {
    pets: null,
    userProfile: null,
    selectedTab: tabNames[defaultTab]
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

  selectTab(i) {
    this.setState({selectedTab: tabNames[i]})
  }

  render() {
    return (
      <div className="app">
        <Tabs
          selectedTabClassName="selected"
          onSelect={this.selectTab.bind(this)}
          defaultIndex={defaultTab}
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

          <TabList className="tabs_list" data-selected={this.state.selectedTab}>
            {
              tabNames.map((name) => {
                return <Tab className={['tab', name]} >{name}</Tab>
              })
            }
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default App;
