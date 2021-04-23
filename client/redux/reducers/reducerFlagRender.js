const FLAG_FOR_CHANGE_DISTANCES = 'TRIGGER_FLAG_FOR_CHANGE_DISTANCES'
const FLAG_FOR_CHANGE_INFO_OR_DESTROY = 'FLAG_FOR_CHANGE_INFO_OR_DESTROY'
const FLAG_FOR_BASKET_LIST = 'FLAG_FOR_BASKET_LIST'

const initialState = {
  changedDistances: false,
  infoOrDestroy: false,
  listNonEmpty: false
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
    case FLAG_FOR_BASKET_LIST: {
      return {
        ...state,
        listNonEmpty: action.flag
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
    dispatch({ type: FLAG_FOR_CHANGE_INFO_OR_DESTROY, flag })
  }
}
export const changeFlagForBasketList = (flag) => {
  return (dispatch) => {
    dispatch({ type: FLAG_FOR_BASKET_LIST, flag })
  }
}