import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const middlewares = [thunk]
if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV === 'development') middlewares.push(createLogger)

// configureStore
const rootReducer = (config) => combineReducers(config.reducer);
const configureStore = (config) => createStore(rootReducer(config), applyMiddleware(...middlewares))

export default configureStore