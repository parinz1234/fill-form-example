import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Object } from 'core-js';

/*
  status
    first
    second
    third
    finish
*/

const exampleInitialState = {
  data: [
    {
      id: 1,
      data: {
        firstForm: {
          firstname: 'hello1',
          lastname: 'world'
        },
        secondForm: {
          gender: 'male',
          age: 24
        },
        thirdForm: {
          province: 'Nonthaburi',
          country: 'Thailand'
        }
      },
      status: 'finish'
    }
  ]
}

export const actionTypes = {
  SUBMIT_FIRST: 'SUBMIT_FIRST',
  SUBMIT_SECOND: 'SUBMIT_SECOND',
  SUBMIT_THIRD: 'SUBMIT_THIRD',
  SUBMIT_PREVIEW: 'SUBMIT_PREVIEW'
}

// reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_FIRST:
      return Object.assign({}, state,{
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            firstForm: action.data,
            status: 'first'
          }
        ]
      })
      break;
    case actionTypes.SUBMIT_SECOND:
      return Object.assign({}, state,{
        data: state.data.map(value => {
          if (value.id === action.id) {
            return Object.assign({}, value, {
              secondForm: action.data,
              status: 'second'
            })
          } else {
            return value
          }
        })
      })
      break;
    case actionTypes.SUBMIT_THIRD:
      return Object.assign({}, state,{
        data: state.data.map(value => {
          if (value.id === action.id) {
            return Object.assign({}, value, {
              thirdForm: action.data,
              status: 'third'
            })
          } else {
            return value
          }
        })
      })
      break;
    case actionTypes.SUBMIT_THIRD:
      return Object.assign({}, state,{
        data: state.data.map(value => {
          if (value.id === action.id) {
            return Object.assign({}, value, {
              status: 'finish'
            })
          } else {
            return value
          }
        })
      })
      break;
    default:
      return state
  }
}

// action
export const submitFirst = (data) => dispatch => {
  return dispatch({ type: actionTypes.SUBMIT_FIRST, data: data.formData })
}

export const submitSecond = (data) => dispatch => {
  return dispatch({ type: actionTypes.SUBMIT_SECOND, id: data.id, data: data.formData })
}

export const submitThird = (data) => dispatch => {
  return dispatch({ type: actionTypes.SUBMIT_THIRD, id: data.id, data: data.formData })
}

export const submitPreview = (data) => dispatch => {
  return dispatch({ type: actionTypes.SUBMIT_PREVIEW, id: data.id})
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}