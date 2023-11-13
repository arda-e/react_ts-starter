import React, { FC } from 'react'
import { classNames } from '../../utils/helpers'

interface ButtonProps {
  isSubmitting: boolean
  isValid: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { isSubmitting, isValid } = props
  return (
    <>
      <button
        disabled={!isValid}
        className={classNames(
          'transition ease-in-out duration-700',
          'bg-[#009ca6] disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-[#2e7b80] text-white font-bold focus:outline-none',
          'flex place-content-center mt-2 h-10 self-end w-1/4 py-2 px-4 rounded'
        )}
        type="submit"
      >
        {isSubmitting && <div className="spinner">*</div>}
        Login
      </button>
    </>
  )
}

export default Button
