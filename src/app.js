import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Search from 'components/search';
import Saved from 'components/saved';
import Settings from 'components/settings';

import 'stylesheets/app.scss';

// used to get around not requesting from same domain
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const petCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
const petUrl = corsAnywhereUrl + petCorsUrl

class App extends Component {
  state = {}

  componentDidMount() {
    fetch(petUrl)
      .then( (response) => response.json() )
      .then( (pets) => {
        this.setState({ pets: pets })
      })
      .catch((err) => { console.log(err)})
  }

  render() {
    return (
      <div className="app">
        <Tabs
          selectedTabClassName="selected"
          defaultIndex={0}
        >
          <div className="panels">
            <TabPanel>
              <Search pets={(this.state.pets || [])}/>
            </TabPanel>

            <TabPanel>
              <Saved/>
            </TabPanel>

            <TabPanel>
              <Settings/>
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
