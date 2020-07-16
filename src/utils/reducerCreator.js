export const reducerCreator = (state, action) => {
  const setState = (newState) => ({
    ...state,
    ...newState,
  });
  const setStateRequest = (newState) => setState({
    loading: true,
    isLoaded: false,
    error: '',
    ...newState,
  });
  const setStateSuccess = (newState) => setState({
    loading: true,
    isLoaded: true,
    error: '',
    ...newState,
  });
  const setStateFailure = (newState) => setState({
    loading: true,
    error: action.error.message,
    ...newState,
  });
  return {
    setState,
    setStateRequest,
    setStateSuccess,
    setStateFailure,
  }
}