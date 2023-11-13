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
      <div className="hero-section h-screen bg-cover bg-center flex grow items-center justify-center text-white bg-slate-400">
        <div className="hero-content text-center">
          <h1 className="text-4xl mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">Explore and discover amazing things.</p>
          <button
            onClick={navigateToAbout}
            className="explore-button bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Explore More
          </button>
          <button
            onClick={handleLogin}
            className="login-button"
          >
            Login
          </button>
        </div>
      </div>

      {loginResponse?.result}
    </>
  )
}

export { Home }
