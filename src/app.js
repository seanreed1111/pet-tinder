import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Deck from 'components/deck';
import SavedList from 'components/savedList';
import UserProfile from 'components/userProfile';

import 'stylesheets/app.scss';

const tabNames = ['search', 'saved', 'settings'];
const defaultTab = 0;

class App extends Component {
  state = { selectedTab: tabNames[defaultTab] }

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
              <Deck/>
            </TabPanel>

            <TabPanel>
              <SavedList/>
            </TabPanel>

            <TabPanel>
              <UserProfile/>
            </TabPanel>
          </div>

          <TabList className="tabs_list" data-selected={this.state.selectedTab}>
            {
              tabNames.map((name, i) => {
                return (
                  <Tab
                    className={['tab', name]}
                    key={i}
                  >
                  {name}
                  </Tab>
                )
              })
            }
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default App;
