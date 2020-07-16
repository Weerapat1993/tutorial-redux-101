import configureStore from './configureStore'
import { postReducer } from '../features/post/redux/reducer'
import { commentSlice } from '../features/comment/redux/commentSlice'

export default configureStore({
  reducer: {
    post: postReducer,
    comment: commentSlice.reducer,
  }
})