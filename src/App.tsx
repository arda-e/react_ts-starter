import React, { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages'

const App = (): ReactElement => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
