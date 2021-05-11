import {
  SET_NAV_TAB,
  SET_DRAWER_STATE,
  SET_THEME_MODE,
} from '../static';

const theme = JSON.parse(localStorage.getItem('theme'));
const nav = JSON.parse(localStorage.getItem('nav'));

const initialState = {
  theme: {
    isDarkTheme: theme?.isDarkTheme ?? true,
  },
  nav: {
    tab: nav?.tab ?? 'chat',
    action: nav?.action ?? 'messages',
  },
  drawer: {
    isOpen: false,
  },
};

const uiInterface = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_TAB: {
      return {
        ...state,
        nav: action.payload,
      };
    }

    case SET_DRAWER_STATE: {
      return {
        ...state,
        drawer: {
          ...state.drawer,
          ...action.payload,
        },
      };
    }

    case SET_THEME_MODE: {
      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default uiInterface;
