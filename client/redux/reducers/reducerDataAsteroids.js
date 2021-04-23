import axios from 'axios'

const DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK = 'DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK'
const GET_LIST_ASTEROIDS_FOR_DESTROY = 'GET_LIST_ASTEROIDS_FOR_DESTROY'
const GET_PARTICULAR_ASTEROID = 'GET_PARTICULAR_ASTEROID'
const GET_FULL_LIST_APPROXIMATION = 'GET_FULL_LIST_APPROXIMATION'

const initialState = {
  currentWeekData: {},
  listOfParticularsAsteroids: [],
  particularAsteroid: {},
  approximationList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK: {
      return {
        ...state,
        currentWeekData: action.getObjectOfList
      }
    }
    case GET_LIST_ASTEROIDS_FOR_DESTROY: {
      return {
        ...state,
        listOfParticularsAsteroids: [...state.listOfParticularsAsteroids, action.thisAsteroid]
      }
    }
    case GET_PARTICULAR_ASTEROID: {
      return {
        ...state,
        particularAsteroid: action.thisAsteroid
      }
    }
    case GET_FULL_LIST_APPROXIMATION: {
      return {
        ...state,
        approximationList: action.list
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

const gettingDataOfAsteroid = (getState, currentId, date) => {
  const store = getState()
  const thisAsteroid = store.reducerDataAsteroids.currentWeekData[date].find(
    ({ id }) => id === currentId
  )
  return thisAsteroid
}

export const getListOfAsteroids = (currentId, date) => {
  return async (dispatch, getState) => {
    try {
      const thisAsteroid = gettingDataOfAsteroid(getState, currentId, date)
      dispatch({ type: GET_LIST_ASTEROIDS_FOR_DESTROY, thisAsteroid })
    } catch (err) {
      console.error(new Error(err))
    }
  }
}
export const getAsteroid = (currentId, date) => {
  return async (dispatch, getState) => {
    try {
      const thisAsteroid = gettingDataOfAsteroid(getState, currentId, date)
      dispatch({ type: GET_PARTICULAR_ASTEROID, thisAsteroid })
    } catch (err) {
      console.error(new Error(err))
    }
  }
}

export const listOfAllApproximation = () => {
  return async (dispatch, getState) => {
    try {
      const store = getState()
      const {
        links: { self: url }
      } = store.reducerDataAsteroids.particularAsteroid
      const {
        data: { close_approach_data: list }
      } = await axios(url)
      dispatch({ type: GET_FULL_LIST_APPROXIMATION , list})
    } catch (err) {
      console.error(new Error(err))
    }
  }
}
