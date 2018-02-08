import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import testReducer from './features/test/redux/reducer'
import testReducer2 from './features/test2/redux/reducer'

const reducerMap = {
  routing: routerReducer,
  ...testReducer,
  ...testReducer2
}

export default combineReducers(reducerMap)
