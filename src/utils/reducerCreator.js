export const reducerCreator = (state, action) => {
  return {
    setState: (newState) => ({
      ...state,
      ...newState,
    })
  }
}