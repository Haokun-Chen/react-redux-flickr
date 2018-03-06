import React from 'react' //Must have React to use JSX
import { render } from 'react-dom' // Use it to render
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' // connect redux and react, provide the store
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './containers/App'  //if use default export, don't use curly braces
import apiReducer from './reducers/apiReducers'

import { fetchImages } from './actions/apiActions'
// const myLogger = (store) => (next) => (action) => {
//   console.log('Logged action', action)
//   next(action)
// }

//create a store in redux to store all the State
// pass the combine reducers
//tell the store who is changing the state
let store = createStore(
  combineReducers({api: apiReducer}),
  {},
  applyMiddleware(thunk, logger)
)

//subscribe to inform store change, handle by reactjs
// store.subscribe(() => {
  // console.log("Store updated ", store.getState())
// })

//dispatch actions when
store.dispatch(fetchImages('dogs'))
//
// store.dispatch({
//   type: 'REQUEST_IMG',
//   payload: 'cats'
// })

render(
  // Pass the store to store property in app
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
)
