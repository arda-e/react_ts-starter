import axios from '../axios'
import { LoginRequest, LoginResponse, LogoutResponse } from './Auth.schema'

export const AuthApi = {
  login: (data: LoginRequest) => {
    return axios.post<LoginResponse>('/auth/login', data)
  },
  logout: () => {
    return axios.post<LogoutResponse>('/auth/logout')
  },
}
