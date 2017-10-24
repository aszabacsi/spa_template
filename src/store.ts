import { createStore, applyMiddleware, compose } from 'redux';
import client from './apolloClient';
import reducers from './reducers';

const initialState = {
  user: {
    username: null,
    firstName: null,
    lastName: null,
    roleID: 0
  }
};

const store = createStore(
  reducers,
  initialState,
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
    //   (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

export default store;