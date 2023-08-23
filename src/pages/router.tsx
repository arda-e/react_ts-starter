import { createBrowserRouter } from 'react-router-dom'
import { Home, About, PageNotFound } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div> {process.env.REACT_APP_PORT}</div>,
  },
  {
    path: '/dashboard',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
