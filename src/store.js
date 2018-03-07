import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/reducers'

export default function configureStore(preloadState){
  return createStore(
    //rootReducer, initialState, applyMiddleware()
    rootReducer,
    preloadState,
    applyMiddleware(thunkMiddleware, logger)
  )
}
