import { useState, useEffect } from 'react'

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>
type ReturnType<T> = [T, SetValue<T>]

const useLocalStorage = <T>(key: string, initialValue: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
