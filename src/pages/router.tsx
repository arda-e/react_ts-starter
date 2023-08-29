import React, { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, PageNotFound } from '../pages'
import Layout from './Layout'

const About = lazy(() => import(/* webpackChunkName: "about_lazy" */ './About/About'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
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
