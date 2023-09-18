import React from 'react'
import { useWillMount, useDidMount, useWillUnmount, useDidUnmount } from 'react-functional-mount'

export const Example: React.FC = () => {
  useWillMount(() => {
    console.log('Example', 'componentWillMount')
  })

  useDidMount(() => {
    console.log('Example', 'componentDidMount')
  })

  useWillUnmount(() => {
    console.log('Example', 'componentWillUnmount')
  })
  
  useDidUnmount(() => {
    console.log('Example', 'componentDidUnmount')
  })

  return (
    <div>
      <div />
    </div>
  )
}
