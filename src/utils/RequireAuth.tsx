import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { ReactElement } from 'react'
import { useAuth } from '../hooks/useAuth'

interface RequireAuthProps {
  allowedRoles: number[]
}
const RequireAuth = ({ allowedRoles }: RequireAuthProps): ReactElement => {
  const authData = useAuth()
  const location = useLocation()

  return authData?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : authData?.user ? (
    <Navigate
      to="/unauthorized"
      state={{ from: location }}
      replace
    />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  )
}

export { RequireAuth }
