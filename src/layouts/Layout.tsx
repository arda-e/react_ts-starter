import React, { ReactElement } from 'react'
import { Outlet } from 'react-router'

const Layout = (): ReactElement => {
  return (
    <>
      <div
        className="flex grow bg-gray-50 h-screen items-center justify-center"
        id="main-container"
      >
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
