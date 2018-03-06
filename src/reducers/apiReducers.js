import {
  REQUEST_IMG,
  RECEIVE_IMG,
  REQUEST_ERROR
} from '../actions/apiActions'

//define reducers handle dispatched actions
// change the state accordingly
const apiReducer = (state = {
  tags: '',
  lastValues: [],
  images: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) => {
  switch (action.type) {
    case REQUEST_IMG:
    //handling the state by creating a new object for immutability
      state = {
        ...state,
        tags: action.tags,
        fetching: true,
        //handle arrays changes in redux state
        lastValues: [...state.lastValues, action.tags]
      }
      break;
    case RECEIVE_IMG:
      state = {
        ...state,
        fetching: false,
        fetched: true,
        images: action.payload,
      }
      break;
    case REQUEST_ERROR:
      state = {
        ...state,
        fetching: false,
        error: action.error
      }
      break;
  }
  return state;
}

export default apiReducer
