import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const middlewares = [thunk]
if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV === 'development') middlewares.push(createLogger)

// configureStore
const configureStore = (config) => createStore(combineReducers(config.reducer), applyMiddleware(...middlewares))

export default configureStore