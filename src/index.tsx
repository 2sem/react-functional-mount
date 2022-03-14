import { useEffect } from 'react'

export const useDidMount = (constructor: () => void): void => {
  useEffect(constructor, [])
}

export const useWillUnmount = (destructor: () => void): void => {
  useEffect(() => {
    return () => {
      destructor()
    }
  }, [])
}
