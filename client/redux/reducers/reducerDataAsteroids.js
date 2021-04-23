import axios from 'axios'
import sortedList from '../../components/ReuseComponents/reuseFunctions/sortedList'

const DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK = 'DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK'
const GET_LIST_ASTEROIDS_FOR_DESTROY = 'GET_LIST_ASTEROIDS_FOR_DESTROY'
const GET_PARTICULAR_ASTEROID = 'GET_PARTICULAR_ASTEROID'
const GET_FULL_LIST_APPROXIMATION = 'GET_FULL_LIST_APPROXIMATION'
const UPDATE_LIST_ASTEROIDS_FOR_DESTROY = 'UPDATE_LIST_ASTEROIDS_FOR_DESTROY'
const LIST_WEEKS = 'LIST_WEEKS'
const initialState = {
  currentWeekData: {},
  weeks: [],
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
    case UPDATE_LIST_ASTEROIDS_FOR_DESTROY: {
      return {
        ...state,
        listOfParticularsAsteroids: [...state.listOfParticularsAsteroids, action.particularAsteroid]
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
    case LIST_WEEKS: {
      const { currentWeekData, nextWeek } = action
      return {
        ...state,
        weeks:
          state.weeks.length === 0 ? [...state.weeks, currentWeekData] : [...state.weeks, nextWeek]
      }
    }
    default:
      return state
  }
}

export const getDataForTheCurrentWeek = () => {
  return async (dispatch, getState) => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10)
      const store = getState()
      const { weeks } = store.reducerDataAsteroids
      const date = () => {
        if (weeks.length === 0) {
          return currentDate
        }
        const lastWeek = weeks[weeks.length - 1]
        const weekList = sortedList(lastWeek)
        return weekList[0]
      }
      const url = `http://www.neowsapp.com/rest/v1/feed?start_date=${date()}&detailed=false&api_key=DEMO_KEY`
      const {
        data: { near_earth_objects: getObjectOfList }
      } = await axios(url)
      dispatch({ type: DATA_ASTEROIDS_FOR_THE_CURRENT_WEEK, getObjectOfList })
    } catch (err) {
      console.error(new Error(err))
    }
  }
}

export const getNextWeek = () => {
  return async (dispatch, getState) => {
    try {
      const store = getState()
      const { currentWeekData } = store.reducerDataAsteroids
      const {
        links: { next }
      } = currentWeekData
      const { data: nextWeek } = await axios(next)
      dispatch({ type: LIST_WEEKS, currentWeekData, nextWeek })
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

export const updateListOfAsteroids = () => {
  return (dispatch, getState) => {
    try {
      const state = getState()
      const { particularAsteroid } = state.reducerDataAsteroids
      dispatch({ type: UPDATE_LIST_ASTEROIDS_FOR_DESTROY, particularAsteroid })
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
      dispatch({ type: GET_FULL_LIST_APPROXIMATION, list })
    } catch (err) {
      console.error(new Error(err))
    }
  }
}
