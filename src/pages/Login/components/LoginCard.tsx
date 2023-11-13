import React, { FC } from 'react'
import { classNames } from '../../../utils/helpers'

interface LoginCardProps {
  children: React.ReactNode
}

const LoginCard: FC<LoginCardProps> = ({ children }) => {
  return (
    <>
      <div className={classNames('w-3/4 md:w-1/2', 'mt-4 md:mt-0 mx-auto mb-8 p-8', 'bg-white rounded-lg shadow-lg')}>
        {children}
      </div>
    </>
  )
}

export default LoginCard
