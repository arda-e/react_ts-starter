import React, { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, PageNotFound } from '../pages'

const About = lazy(() => import(/* webpackChunkName: "about_lazy" */ './About/About'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<div> {process.env.REACT_APP_PORT}</div>}
    >
      <Route
        path="dashboard"
        element={<Home />}
      />
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Route>
  )
)
