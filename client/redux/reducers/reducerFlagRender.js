const FLAG_FOR_CHANGE_DISTANCES = 'TRIGGER_FLAG_FOR_CHANGE_DISTANCES'
const FLAG_FOR_CHANGE_INFO_OR_DESTROY = 'FLAG_FOR_CHANGE_INFO_OR_DESTROY'
const initialState = {
  changedDistances: false,
  infoOrDestroy: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FLAG_FOR_CHANGE_DISTANCES: {
      return {
        ...state,
        changedDistances: action.flag
      }
    }
    case FLAG_FOR_CHANGE_INFO_OR_DESTROY: {
      return {
        ...state,
        infoOrDestroy: action.flag
      }
    }
    default:
      return state
  }
}

export const changedFlagForDistances = (flag) => {
  return (dispatch) => {
    dispatch({ type: FLAG_FOR_CHANGE_DISTANCES, flag })
  }
}

export const changeFlagForInfoOrDestroy = (flag) => {
  return (dispatch) => {
    dispatch({type: FLAG_FOR_CHANGE_INFO_OR_DESTROY, flag})
  }
}
