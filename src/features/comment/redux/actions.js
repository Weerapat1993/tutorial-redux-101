import axios from 'axios'
import { FETCH_COMMENT_BY_POST_ID } from "./actionTypes";

export const fetchCommentByPostIdRequest = () => ({ type: FETCH_COMMENT_BY_POST_ID.REQUEST })
export const fetchCommentByPostIdSuccess = data => ({ type: FETCH_COMMENT_BY_POST_ID.SUCCESS, data })
export const fetchCommentByPostIdFailure = error => ({ type: FETCH_COMMENT_BY_POST_ID.FAILURE, error })
export const fetchCommentByPostId = id => (dispatch, getState) => {
  dispatch(fetchCommentByPostIdRequest())
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => dispatch(fetchCommentByPostIdSuccess(res.data)))
    .catch(error => dispatch(fetchCommentByPostIdFailure(error)))
}
