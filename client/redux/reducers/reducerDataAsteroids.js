import axios from 'axios'

const DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK = 'DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK'
const GET_PARTICULAR_ASTEROID = 'GET_PARTICULAR_ASTEROID'

const initialState = {
  currentWeekData: {},
  listOfParticularsAsteroids: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK: {
      return {
        ...state,
        currentWeekData: action.getObjectOfList
      }
    }
    case GET_PARTICULAR_ASTEROID: {
      return {
        ...state,
        listOfParticularsAsteroids: [...state.listOfParticularsAsteroids, action.thisAsteroid]

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
      console.error(new Error(err))
    }
  }
}

export const getParticularAsteroid = (currentId, date) => {
  return async (dispatch, getState) => {
    try {
      const store = getState()
      const thisAsteroid = store.reducerDataAsteroids.currentWeekData[date].find(
        ({ id }) => id === currentId
      )
      dispatch({ type: GET_PARTICULAR_ASTEROID, thisAsteroid })
    } catch (err) {
      console.error(new Error(err))
    }
  }
}
