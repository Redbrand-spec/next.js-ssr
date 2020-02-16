import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import Token from './Redux/token'
import Posts from './Redux/posts'
import Comm from './Redux/comments'
import Full from './Redux/fullpost'

const rootReducer = combineReducers({
  Token, Posts, Comm, Full
});

export const initializeStore = (initialState) => {
  return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)))
}