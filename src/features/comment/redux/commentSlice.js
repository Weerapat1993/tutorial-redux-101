import axios from 'axios'
import { asyncActionType } from "../../../utils/asyncActionType";
import { reducerCreator } from "../../../utils/reducerCreator"

// Action Types
const FETCH_COMMENT_BY_POST_ID = asyncActionType('FETCH_COMMENT_BY_POST_ID')

// Actions
const fetchCommentByPostIdRequest = () => ({ type: FETCH_COMMENT_BY_POST_ID.REQUEST })
const fetchCommentByPostIdSuccess = data => ({ type: FETCH_COMMENT_BY_POST_ID.SUCCESS, data })
const fetchCommentByPostIdFailure = error => ({ type: FETCH_COMMENT_BY_POST_ID.FAILURE, error })
const fetchCommentByPostId = id => (dispatch, getState) => {
  dispatch(fetchCommentByPostIdRequest())
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => dispatch(fetchCommentByPostIdSuccess(res.data)))
    .catch(error => dispatch(fetchCommentByPostIdFailure(error)))
}

// Reducer
const initialState = {
  loading: false,
  isLoaded: false,
  error: '',
  data: [],
}

const commentReducer = (state = initialState, action) => {
  const { setState } = reducerCreator(state, action)
  switch(action.type) {
    case FETCH_COMMENT_BY_POST_ID.REQUEST:
      return setState({
        loading: true,
        error: '',
      })
    case FETCH_COMMENT_BY_POST_ID.SUCCESS:
      return setState({
        loading: false,
        isLoaded: true,
        data: action.data,
      })
    case FETCH_COMMENT_BY_POST_ID.FAILURE:
      return setState({
        loading: false,
        error: action.error.message,
      })
    default:
      return state
  }
}


export const commentSlice = {
  actions: {
    fetchCommentByPostId
  },
  reducer: commentReducer,
};