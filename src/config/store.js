import configureStore from './configureStore'
import { postReducer } from '../features/post/redux/reducer'
import { commentReducer } from '../features/comment/redux/reducer'

export default configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
  }
})