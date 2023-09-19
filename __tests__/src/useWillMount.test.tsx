import React from 'react'
import { mount } from 'enzyme'
import { useWillMount } from '../..'

const componentWillMount = jest.fn()
export const TestComponent: React.FC = () => {
  useWillMount(componentWillMount)

  return (
    <div>
      <div />
    </div>
  )
}

describe('useDidMount', () => {
  it('useWillMount will can be called', () => {
    const renderer = mount(<TestComponent />)
    renderer.mount()
    expect(componentWillMount).toBeCalled()
  })
})
