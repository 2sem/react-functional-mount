import React from 'react'
import { useDidMount, useWillUnmount } from 'react-functional-mount'

export const Example: React.FC = () => {
  useDidMount(() => {
    console.log('Example', 'componentDidMount')
  })

  useWillUnmount(() => {
    console.log('Example', 'componentWillUnmount')
  })

  return (
    <div>
      <div />
    </div>
  )
}
