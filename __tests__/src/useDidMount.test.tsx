import React from 'react'
import { mount } from 'enzyme'
import { useDidMount } from '../../src'

const componentDidMount = jest.fn()
export const TestComponent: React.FC = () => {
  useDidMount(componentDidMount)

  return (
    <div>
      <div />
    </div>
  )
}

describe('useDidMount', () => {
  it('useDidMount will can be called', () => {
    const renderer = mount(<TestComponent />)
    renderer.mount()
    expect(componentDidMount).toBeCalled()
  })
})
