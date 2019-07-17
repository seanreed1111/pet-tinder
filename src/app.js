import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Search from 'components/search';
import Saved from 'components/saved';
import Settings from 'components/settings';

import 'stylesheets/app.scss';

function App() {
  return (
    <div className="app">
      <Tabs
        selectedTabClassName="selected"
        defaultIndex={0}
      >
        <div className="panels">
          <TabPanel>
            <Search/>
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

export default App;
