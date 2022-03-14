import React from 'react'
import { mount } from 'enzyme'
import { useWillUnmount } from '../../src'

const componentWillUnmount = jest.fn()
export const TestComponent: React.FC = () => {
  useWillUnmount(componentWillUnmount)

  return (
    <div>
      <div />
    </div>
  )
}

describe('useDidMount', () => {
  it('Mount handler will can be called', () => {
    const renderer = mount(<TestComponent />)
    renderer.unmount()
    expect(componentWillUnmount).toBeCalled()
  })
})
