import axios from 'axios'
import { FETCH_POST } from "./actionTypes";

export const fetchPostRequest = () => ({ type: FETCH_POST.REQUEST })
export const fetchPostSuccess = data => ({ type: FETCH_POST.SUCCESS, data })
export const fetchPostFailure = error => ({ type: FETCH_POST.FAILURE, error })
export const fetchPost = () => (dispatch, getState) => {
  dispatch(fetchPostRequest())
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch(fetchPostSuccess(res.data)))
    .catch(error => dispatch(fetchPostFailure(error)))
}