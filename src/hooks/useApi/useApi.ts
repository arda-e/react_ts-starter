import { useState, useCallback } from 'react'
import { AxiosPromise } from 'axios'

export interface ApiResponse<T> {
  result?: T | undefined
  error?: Error | undefined
  isFetching: boolean
}

type UseApiResponse<T> = [ApiResponse<T>, (...args: unknown[]) => Promise<void>]

export function useApi<T>(serviceMethod: (...args: unknown[]) => AxiosPromise<T>): UseApiResponse<T> {
  const [result, setResult] = useState<T | undefined>(undefined)
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const apiCallback = useCallback(
    async (...args: unknown[]): Promise<void> => {
      setError(undefined)
      setFetching(true)
      try {
        const result = await serviceMethod(...args)
        setResult(result.data)
      } catch (error) {
        setError(error as Error)
      }
      setFetching(false)
    },
    [serviceMethod]
  )

  const apiResponse = {
    result,
    error,
    isFetching,
  }
  return [apiResponse, apiCallback]
}

export default useApi
