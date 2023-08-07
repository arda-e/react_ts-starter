import React, { ReactElement } from 'react'

const App = (): ReactElement => {
  return (
    <>
      <div> {process.env.REACT_APP_PORT}</div>
    </>
  )
}

export default App
