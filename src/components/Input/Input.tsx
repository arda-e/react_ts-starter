import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { classNames } from '../../utils/helpers'

interface InputProps {
  label: string
  name: string
  placeholder: string
}

const Input: FC<InputProps> = ({ label, name, placeholder }) => {
  const { register, formState } = useFormContext()

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-semibold mb-1"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={classNames(
            'bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500',
            'text-gray-900 text-sm',
            'rounded-lg block w-full p-1.5'
          )}
          id={name}
          type="text"
          placeholder={placeholder}
          {...register(name)}
        />
        <p className="text-red-500 text-xs pt-2">{formState.errors[name]?.message?.toString()}</p>
      </div>
    </>
  )
}

export default Input
