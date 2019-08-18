import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";
import classNames from "classnames";

import Deck from 'components/deck';
import SavedList from 'components/savedList';
import UserProfile from 'components/userProfile';

import 'stylesheets/app.scss';

class App extends Component {
  render() {
    let activeTab = window.location.pathname.split('/')[1]
    return (
      <div className="app">
        <Router>
          <Route path="/pets" component={Deck}></Route>
          <Route path="/saved" component={SavedList}></Route>
          <Route path="/profile" component={UserProfile}></Route>

          <RoutedTabs
            className={classNames(["tabs_list", activeTab])}
            tabClassName="tab"
            activeTabClassName="active"
          >
            <NavTab className="tab" to="/pets">View Pets</NavTab>
            <NavTab className="tab" to="/saved">Saved Pets</NavTab>
            <NavTab className="tab" to="/profile">My Profile</NavTab>
          </RoutedTabs>
        </Router>
      </div>
    );
  }
}

export default App;
