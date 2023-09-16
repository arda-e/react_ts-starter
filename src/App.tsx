import React, { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages'
import { AuthProvider } from './context'

const App = (): ReactElement => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
