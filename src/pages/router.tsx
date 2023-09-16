import React, { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, PageNotFound } from '../pages'
import { RequireAuth, ROLES } from '../utils'
import { Layout } from '../layouts'

const About = lazy(() => import(/* webpackChunkName: "about_lazy" */ './About/About'))
const Admin = lazy(() => import(/* webpackChunkName: "admin_lazy" */ './Admin/Admin'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      {/* PUBLIC ROUTES */}
      <Route
        path="dashboard"
        element={<Home />}
      />
      <Route
        path="about"
        element={<About />}
      />
      {/* PROTECTED ROUTES */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route
          path="admin"
          element={<Admin />}
        />
      </Route>
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Route>
  )
)
