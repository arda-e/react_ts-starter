import React, { lazy, Suspense } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, PageNotFound } from '../pages'
import { RequireAuth, ROLES, Loading, ErrorBoundary } from '../utils'
import { Layout } from '../layouts'
import { Login } from './Login'

const About = lazy(() => import(/* webpackChunkName: "about_lazy" */ './About/About'))
const Admin = lazy(() => import(/* webpackChunkName: "admin_lazy" */ './Admin/Admin'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<ErrorBoundary />}
    >
      {/* PUBLIC ROUTES */}
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={<Login />}
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
