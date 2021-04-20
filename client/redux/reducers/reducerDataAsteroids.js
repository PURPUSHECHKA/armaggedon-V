import axios from 'axios'

const DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK = 'DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK'

const initialState = {
  currentWeekData: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK: {
      return {
        ...state,
        currentWeekData: action.getObjectOfList
      }
    }
    default:
      return state
  }
}

export const getDataForTheCurrentWeek = () => {
  return async (dispatch) => {
    try {
      const { data: getObjectOfList } = await axios('/api/v1/initialListOfAsteroids')
      dispatch({ type: DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK, getObjectOfList })
    } catch (err) {
      console.log(new Error(err))
    }
  }
}
