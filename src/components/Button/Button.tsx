import React, { FC } from 'react'
import { classNames } from '../../utils/helpers'

interface ButtonProps {
  isLoading: boolean
  isValid: boolean
  text: string
}

const Button: FC<ButtonProps> = (props) => {
  const { isLoading, isValid, text } = props
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
        {isLoading && <div className="spinner">*</div>}
        {text}
      </button>
    </>
  )
}

export default Button
