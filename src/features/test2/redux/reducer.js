import initialState from "./initialState";
import {TEST_ACTION_SUCCESS,TEST_ACTION_SUCCESS2} from "./actionTypes";
import Immutable from "seamless-immutable";
import { combineReducers } from 'redux';

function testReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case TEST_ACTION_SUCCESS:
      return Immutable.merge(state, payload)
    default:
      return state
  }
}

function testReducer2(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case TEST_ACTION_SUCCESS2:
      return Immutable.merge(state, payload)
    default:
      return state
  }
}

const AppReducer = {
  test: testReducer,
  test2: testReducer2
}

export default AppReducer
