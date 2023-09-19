import React from 'react'
import { mount } from 'enzyme'
import { useWillUnmount, useDidUnmount } from '../..'
import 'jest-extended';

const componentWillUnmount = jest.fn()
const componentDidUnmount = jest.fn()

export const TestComponent: React.FC = () => {
  useWillUnmount(componentWillUnmount)
  useDidUnmount(componentDidUnmount)

  return (
    <div>
      <div />
    </div>
  )
}

describe('useDidMount', () => {
  it('useWillUnmount will can be called', () => {
    const renderer = mount(<TestComponent />)
    renderer.unmount()
    expect(componentWillUnmount).toHaveBeenCalledBefore(componentDidUnmount)
  })
})
