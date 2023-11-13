import React, { ReactElement } from 'react'
import { Outlet } from 'react-router'

const Layout = (): ReactElement => {
  return (
    <>
      <div id="main-container">
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
