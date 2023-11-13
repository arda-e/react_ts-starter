import React, { ReactElement } from 'react'
import { useNavigate, NavigateFunction } from 'react-router'
// COMPONENT IMPORTS
import { LoginCard, LoginForm } from './components'
// HOOK & API IMPORTS
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useApi, useLocalStorage } from '../../hooks'
import { AuthApi, AuthSchema, LoginResponse } from '../../entities'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'

const Login = (): ReactElement => {
  const navigate = useNavigate()
  const auth = useAuth()

  const methods = useForm<FieldValues>({
    resolver: zodResolver(AuthSchema),
    defaultValues: { email: '', password: '' },
  })

  const [loginResponse, login] = useApi(AuthApi.login)
  const onSubmit: SubmitHandler<FieldValues> = (data) => login(data)

  const [, setUser] = useLocalStorage<LoginResponse | null>('user', null)

  const navigateToHomeAndUpdateState = (navigate: NavigateFunction): void => {
    setUser(loginResponse?.result || null)
    auth?.dispatch({ type: 'SET_USER', payload: loginResponse?.result })
    navigate('/home')
  }

  if (loginResponse.result) navigateToHomeAndUpdateState(navigate)

  return (
    <>
      <LoginCard>
        <LoginForm
          onSubmit={onSubmit}
          methods={methods}
        />
      </LoginCard>
    </>
  )
}

export default Login
