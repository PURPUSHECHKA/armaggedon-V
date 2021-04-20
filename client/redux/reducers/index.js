import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import reducerDataAsteroids from './reducerDataAsteroids'
import reducerFlagRender from './reducerFlagRender'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    reducerDataAsteroids,
    reducerFlagRender
  })

export default createRootReducer
