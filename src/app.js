import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Deck from 'components/deck';
import SavedList from 'components/savedList';
import UserProfile from 'components/userProfile';

import { connect } from 'react-redux';
import { setProfile } from 'redux/actions/userProfile';

import 'stylesheets/app.scss';

const tabNames = ['search', 'saved', 'settings'];
const defaultTab = 0;

// used to get around not requesting from same domain
// FIXME: (allow this domain from server)
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const profileCorsUrl = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';
const profileUrl = corsAnywhereUrl + profileCorsUrl;

class App extends Component {
  state = { selectedTab: tabNames[defaultTab] }

  componentDidMount() {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    fetch(profileUrl)
      .then( (response) => response.json() )
      .then( (profile) => {
        this.props.setProfile(profile);
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

const mapStateToProps = (state) => {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setProfile: (profile) => {
      dispatch(setProfile(profile))
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
