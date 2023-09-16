import { LOGOUT, SET_USER } from './Auth.actions'

export interface AuthState {
  isAuthenticated: boolean
  user: any
}

interface SetUserAction {
  type: typeof SET_USER
  payload: AuthState['user']
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthAction = SetUserAction | LogoutAction
