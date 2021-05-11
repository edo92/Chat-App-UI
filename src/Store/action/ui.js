import {
  SET_NAV_TAB,
  SET_DRAWER_STATE,
  SET_THEME_MODE,
} from '../static';

export const toggleNavTab = (tab) => {
  return (dispatch) => {
    localStorage.setItem('nav', JSON.stringify(tab));

    dispatch({
      type: SET_NAV_TAB,
      payload: tab,
    });
  };
};

export const toggleTheme = (mode) => {
  return (dispatch, getState) => {
    const current = getState().ui.theme.isDarkTheme;

    const setMode =
      typeof mode === 'object' ? !current : mode;

    localStorage.setItem(
      'theme',
      JSON.stringify({
        isDarkTheme: setMode,
      }),
    );

    dispatch({
      type: SET_THEME_MODE,
      payload: {
        isDarkTheme: setMode,
      },
    });
  };
};

export const toggleDrawer = (status, content) => {
  return (dispatch, getState) => {
    const state = getState().ui.drawer;
    const isOpen = status || !state.isOpen;

    const activeMenu =
      content?.toLowerCase() || state.activeMenu;

    dispatch({
      type: SET_DRAWER_STATE,
      payload: { isOpen, activeMenu },
    });
  };
};
