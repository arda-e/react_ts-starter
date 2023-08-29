import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const Home = (): ReactElement => {
  const navigate = useNavigate()

  const navigateToAbout = () => {
    navigate('/about')
  }

  return (
    <>
      <button
        onClick={navigateToAbout}
        className="text-6xl"
      >
        Home
      </button>
    </>
  )
}

export { Home }
