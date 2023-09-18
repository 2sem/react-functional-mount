import { useEffect, useLayoutEffect } from 'react'

export const useWillMount = (constructor: () => void): void => {
  useLayoutEffect(constructor, [])
}

export const useDidMount = (constructor: () => void): void => {
  useEffect(constructor, [])
}

export const useWillUnmount = (destructor: () => void): void => {
  useLayoutEffect(() => {
    return () => {
      destructor()
    }
  }, [])
}

export const useDidUnmount = (destructor: () => void): void => {
  useEffect(() => {
    return () => {
      destructor()
    }
  }, [])
}
