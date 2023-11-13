import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const Home = (): ReactElement => {
  const navigate = useNavigate()

  const navigateToAbout = (): void => {
    navigate('/about')
  }

  const navigateToLogin = (): void => {
    navigate('/login')
  }

  return (
    <>
      <div className="hero-section h-screen bg-cover bg-center flex grow items-center justify-center text-white bg-slate-400">
        <div className="hero-content text-center">
          <h1 className="text-4xl mb-4 font-bold">Welcome to Our Website</h1>
          <p className="text-lg mb-8">Explore and discover amazing things.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={navigateToAbout}
              className="explore-button bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Explore More
            </button>
            <button
              onClick={navigateToLogin}
              className=" bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
