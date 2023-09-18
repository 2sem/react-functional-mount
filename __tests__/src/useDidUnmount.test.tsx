import React from 'react'
import { mount } from 'enzyme'
import { useDidUnmount } from '../../src'

const componentDidUnmount = jest.fn()
export const TestComponent: React.FC = () => {
  useDidUnmount(componentDidUnmount)

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
    expect(componentDidUnmount).toBeCalled()
  })
})
