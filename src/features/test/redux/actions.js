import axios from 'utils/services'
import {
  API_GET_STORE_LIST
} from 'constants/api'

import {
  TEST_ACTION_SUCCESS,
  TEST_ACTION_SUCCESS2,
} from './actionTypes'

import initialState from './initialState'



export const fetchDeptRadar = (params, cb = () => { }) => {
  return async (dispatch, getState) => {
    const response = await axios.get(API_GET_STORE_LIST, {userid:'19000318'})
    dispatch({
      type: TEST_ACTION_SUCCESS,
      payload:{testData:[{name:'测测测'}]}
    })
  }
}

export const fetchDeptRadar2 = (params, cb = () => { }) => {
  return async (dispatch, getState) => {
    const response = await axios.get(API_GET_STORE_LIST, {userid:'19000318'})
    dispatch({
      type: TEST_ACTION_SUCCESS2,
      payload:{testData2:[{name:'测测测2'}]}
    })
  }
}