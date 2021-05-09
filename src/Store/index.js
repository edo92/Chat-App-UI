import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import ui from './reducer/ui';
import data from './reducer/data';

const rootReducer = combineReducers({
  ui,
  data,
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
};

export default configureStore;
