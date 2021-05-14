import React, { Component } from 'react';
import { connect } from 'react-redux';

// Page Metadata
import { metadata } from './content';
import PageWrapper from 'Components/Page';

// Partials
import Navigation from 'Partials/Navigation';
import SideBar from 'Partials/SideBar';
import WorkBench from 'Partials/WorkBench';
import SideDrawer from 'Partials/SideDrawer';
import ModalMenu from 'Partials/Modal';

// Store ui actions -> ui
import {
  toggleNavTab,
  toggleDrawer,
  toggleTheme,
  toggleModal,
} from 'Store/action/ui';

// Store api actions -> data
import {
  getFriends,
  getChat,
  getMessage,
  getUserProfile,
} from 'Store/action/data';

class HomePage extends Component {
  componentDidMount() {
    // Initial fetch
    this.props.initFetch.getFriendList();
    this.props.initFetch.getChatList();
  }

  render() {
    const {
      uiState,
      uiHandlers,
      dataState,
      apiHandlers,
    } = this.props;

    return (
      <PageWrapper metadata={metadata}>
        <Navigation
          uiState={uiState}
          dataState={dataState}
          uiHandlers={uiHandlers}
          apiHandlers={apiHandlers}
        />

        <SideBar
          uiState={uiState}
          uiHandlers={uiHandlers}
          apiHandlers={apiHandlers}
          data={dataState.tabContext}
        />

        <WorkBench
          activeTab={uiState.navTab}
          data={dataState.barContext}
        />

        <SideDrawer
          drawer={uiState.drawer}
          toggle={uiHandlers.toggleDrawer}
        />

        <ModalMenu
          modal={uiState.modal}
          toggle={uiHandlers.toggleModal}
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
      modal: ui.modal,
    },
    dataState: {
      tabContext: data[ui.nav.tab], // gets data based on nav/tab selection
      barContext: data[ui.nav.action], // gets data based on nav/tab and sidebar sel.
      profile: data.profile,
      masterUser: data.masterUser,
    },
  };
};

const mapDispatchToProsp = (dispatch) => {
  return {
    initFetch: {
      getChatList: () => dispatch(getChat()),
      getFriendList: () => dispatch(getFriends()),
    },
    apiHandlers: {
      getMessage: (id) => dispatch(getMessage(id)),
      getUserProfile: (id) =>
        dispatch(getUserProfile(id)),
    },
    uiHandlers: {
      toggleTheme: (mode) => dispatch(toggleTheme(mode)),
      toggleNavTab: (tab) => dispatch(toggleNavTab(tab)),
      toggleModal: (m, c) => dispatch(toggleModal(m, c)),
      toggleDrawer: (s, c) =>
        dispatch(toggleDrawer(s, c)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp,
)(HomePage);
