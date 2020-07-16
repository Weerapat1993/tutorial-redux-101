import { FETCH_POST } from "./actionTypes"
import { reducerCreator } from "../../../utils/reducerCreator"

const initialState = {
  loading: false,
  isLoaded: false,
  error: '',
  data: [],
}

export const postReducer = (state = initialState, action) => {
  const { setState } = reducerCreator(state, action)
  switch(action.type) {
    case FETCH_POST.REQUEST:
      return setState({
        loading: true,
        error: '',
      })
    case FETCH_POST.SUCCESS:
      return setState({
        loading: false,
        isLoaded: true,
        data: action.data,
      })
    case FETCH_POST.FAILURE:
      return setState({
        loading: false,
        error: action.error.message,
      })
    default:
      return state
  }
}