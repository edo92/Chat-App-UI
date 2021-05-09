import {
  SET_FRIEND_LIST,
  SET_CHAT_LIST,
  GET_CONVERSATION,
} from '../static';

const initialState = {
  users: [],
  chat: [],
  messages: {},
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_LIST: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SET_CHAT_LIST: {
      return {
        ...state,
        chat: action.payload,
      };
    }

    case GET_CONVERSATION: {
      return {
        ...state,
        messages: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appData;
