import 'babel-polyfill' //emulate full ES6 environment, use Object.assign, Promise etc.

import React from 'react' //Must have React to use JSX
import { render } from 'react-dom' // Use it to render
import { Provider } from 'react-redux' // connect redux and react, provide the store
import App from './containers/App'  //if use default export, don't use curly braces
import configureStore from './store'

const store = configureStore()

// Pass the store to store property in app,
// could be used by connect() instead of store.subscribe or store.dispatch
render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
)

// const myLogger = (store) => (next) => (action) => {
//   console.log('Logged action', action)
//   next(action)
// }
