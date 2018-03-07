import { combineReducers } from 'redux'

import {
  FETCH_IMG_PENDING,
  FETCH_IMG_FULFILLED,
  FETCH_IMG_REJECTED
} from '../actions/apiActions'

// define reducers handle dispatched actions
// change the state accordingly
const apiReducer = (state = {
  tags: 'empty',
  lastTags: [],
  images: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) => {
  switch (action.type) {
    case FETCH_IMG_PENDING:
    //handling the state by creating a new object for immutability
      state = {
        ...state,
        tags: action.tags,
        fetching: true,
        fetched: false,
        //handle arrays changes in redux state
        lastTags: [...state.lastTags, action.tags]
      }
      break
    case FETCH_IMG_REJECTED:
      state = {
        ...state,
        fetching: false,
        image: [],
        error: action.error.status,
      }
      break
    case FETCH_IMG_FULFILLED:
      state = {
        ...state,
        fetching: false,
        fetched: true,
        images: action.payload,
      }
      break
    default:
      return state
  }
  return state;
}

const rootReducer = combineReducers({
  api: apiReducer,
})

export default rootReducer
