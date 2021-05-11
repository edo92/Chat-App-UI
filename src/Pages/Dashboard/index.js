import React, { Component } from 'react';
import { connect } from 'react-redux';

import { metadata } from './content';
import PageWrapper from 'Components/Page';

import Navigation from 'Partials/Navigation';
import SideBar from 'Partials/SideBar';
import WorkBench from 'Partials/WorkBench';
import SideDrawer from 'Partials/SideDrawer';

import {
  toggleNavTab,
  toggleDrawer,
  toggleTheme,
} from 'Store/action/ui';

import {
  getFriends,
  getChat,
  getMessage,
} from 'Store/action/data';

class HomePage extends Component {
  // Initial fetch
  componentDidMount() {
    this.props.apiHandlers.getFriendList();
    this.props.apiHandlers.getChatList();
  }

  render() {
    const {
      uiState,
      uiHandlers,
      dataState,
      apiHandlers,
    } = this.props;

    const { toggleDrawer } = uiHandlers;

    return (
      <PageWrapper metadata={metadata}>
        <Navigation
          uiHandlers={uiHandlers}
          activeTab={uiState.navTab}
        />

        <SideBar
          activeTab={uiState.navTab}
          apiHandlers={apiHandlers}
          toggleDrawer={toggleDrawer}
          data={dataState.tabContext}
        />

        <WorkBench
          activeTab={uiState.navTab}
          data={dataState.barContext}
        />

        <SideDrawer
          toggle={toggleDrawer}
          drawer={uiState.drawer}
        />
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { ui, data } = state;
  return {
    uiState: {
      navTab: ui.nav.tab,
      drawer: ui.drawer,
    },
    dataState: {
      // gets data based on nav/tab selection
      tabContext: data[ui.nav.tab],
      // gets data based on nav/tab and sidebar sel.
      barContext: data[ui.nav.action],
    },
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    uiHandlers: {
      toggleTheme: (mode) => dispatch(toggleTheme(mode)),
      toggleNavTab: (tab) => dispatch(toggleNavTab(tab)),
      toggleDrawer: (s, c) =>
        dispatch(toggleDrawer(s, c)),
    },
    apiHandlers: {
      getFriendList: () => dispatch(getFriends()),
      getChatList: () => dispatch(getChat()),
      getMessage: (id) => dispatch(getMessage(id)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(HomePage);
