import React, { ReactElement } from 'react'
import { useNavigate, NavigateFunction } from 'react-router'
// COMPONENT IMPORTS
import { LoginCard, LoginForm } from './components'
// HOOK & API IMPORTS
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useApi } from '../../hooks'
import { AuthApi, AuthSchema } from '../../entities'
import { zodResolver } from '@hookform/resolvers/zod'

const navigateToHomeAndUpdateState = (navigate: NavigateFunction): void => {
  // TODO: Update state
  navigate('/home')
}

const Login = (): ReactElement => {
  const navigate = useNavigate()

  const methods = useForm({
    resolver: zodResolver(AuthSchema),
    mode: 'onBlur',
  })
  const [loginResponse, login] = useApi(AuthApi.login)

  const onSubmit: SubmitHandler<FieldValues> = (data) => login(data)

  if (loginResponse.result) navigateToHomeAndUpdateState(navigate)

  return (
    <>
      <LoginCard>
        <LoginForm
          //isLoading={loginResponse.isFetching}
          onSubmit={onSubmit}
          methods={methods}
        />
      </LoginCard>
    </>
  )
}

export default Login
