import { Reducer } from 'react'
import { LOGOUT, SET_USER } from './Auth.actions'
import { AuthAction, AuthState } from './Auth.types'

export const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}
