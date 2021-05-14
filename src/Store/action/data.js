import {
  SET_FRIEND_LIST,
  SET_CHAT_LIST,
  GET_CONVERSATION,
  SET_USER_INFO,
} from '../static';

// ** DEV_DATASET
import { friendUsers } from '__Dataset/friendsList';
import { chatLists } from '__Dataset/latestChat';
import { conversation } from '__Dataset/messages';
import { users } from '__Dataset/users';
// ** **/

export const getUserProfile = (id) => {
  return async (dispatch) => {
    // Dev
    console.log('getting user id', id);
    const dataset = await Promise.all([users[id]]);
    dispatch({
      type: SET_USER_INFO,
      payload: dataset[0],
    });
  };
};

export const getFriends = () => {
  return async (dispatch) => {
    // Dev
    const dataset = await Promise.all(friendUsers);
    dispatch({
      type: SET_FRIEND_LIST,
      payload: dataset,
    });
  };
};

export const getChat = () => {
  return async (dispatch) => {
    // Dev
    const dataset = await Promise.all(chatLists);
    dispatch({
      type: SET_CHAT_LIST,
      payload: dataset,
    });
  };
};

export const getMessage = (user) => {
  return async (dispatch) => {
    // Dev
    const chat = await Promise.all(
      conversation[user.id],
    );
    dispatch({
      type: GET_CONVERSATION,
      payload: { chat, user },
    });
  };
};
