import { FETCH_COMMENT_BY_POST_ID } from "./actionTypes"
import { reducerCreator } from "../../../utils/reducerCreator"

const initialState = {
  loading: false,
  isLoaded: false,
  error: '',
  data: [],
}

export const commentReducer = (state = initialState, action) => {
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