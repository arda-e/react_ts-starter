import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorBoundary() {
  let error = useRouteError() as Error
  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <>
      <div className="flex flex-col grow items-center justify-center h-screen text-center px-24 bg-gray-100 gap-4">
        <h1 className="font-bold text-xl">Something went wrong.</h1>
        <p>{error.message}</p>
      </div>
    </>
  )
}

export default ErrorBoundary
