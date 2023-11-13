import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'
import { useApi } from '../../hooks/'
import { AuthApi } from '../../entities'

const Home = (): ReactElement => {
  const navigate = useNavigate()

  const navigateToAbout = () => {
    navigate('/about')
  }

  const [loginResponse, login] = useApi(AuthApi.login)

  const handleLogin = () => {
    login({ email: 'mericardaeren@gmail.com' })
  }

  return (
    <>
      <button
        onClick={navigateToAbout}
        className="text-6xl"
      >
        Home
      </button>
      <button onClick={handleLogin}>Login</button>
      {loginResponse?.result}
    </>
  )
}

export { Home }
