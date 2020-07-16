import { FETCH_POST } from "./actionTypes"
import { reducerCreator } from "../../../utils/reducerCreator"

const initialState = {
  loading: false,
  isLoaded: false,
  error: '',
  data: [],
}

export const postReducer = (state = initialState, action) => {
  const { setStateRequest, setStateSuccess, setStateFailure } = reducerCreator(state, action)
  switch(action.type) {
    case FETCH_POST.REQUEST:
      return setStateRequest()
    case FETCH_POST.SUCCESS:
      return setStateSuccess({ data: action.data })
    case FETCH_POST.FAILURE:
      return setStateFailure()
    default:
      return state
  }
}