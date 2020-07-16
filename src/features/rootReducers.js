import { combineReducers } from 'redux'
import { postReducer } from './post/redux/reducer'
import { commentReducer } from './comment/redux/reducer'

const rootReducers = {
  post: postReducer,
  comment: commentReducer,
}

export default combineReducers(rootReducers)