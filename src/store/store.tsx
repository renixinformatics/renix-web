/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
// Import reducers and state type

import {homeState, homeReducer} from "../reducers/homeReducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistHomeDataConfig={
  key: "Account",
  storage: storage,
  whitelist: [""]
}


// Create an interface for the application state
export interface IAppState {
  homeState: homeState,
 
}


// Create the root reducer
const rootReducer = combineReducers({
  homeState:persistReducer(persistHomeDataConfig,homeReducer),
});

// // Create a configure store function of type `IAppState`
// export default function configureStore(): Store<IAppState, any> {
//   const store = createStore(rootReducer, applyMiddleware(thunk));
//   return store;
// }

const composeEnhancers = composeWithDevTools({});

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push();
}

function confiqureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}


export const store = confiqureStore();

export const persistor = confiqureStore();