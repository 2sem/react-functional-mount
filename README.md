# react-functional-mount

> Mount/Unmount hook for functional component

[![NPM](https://img.shields.io/npm/v/react-functional-mount.svg)](https://www.npmjs.com/package/react-functional-mount) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-functional-mount
```

## Usage

```tsx
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
  
  return <Component />
}
```

## License

MIT © [2sem](https://github.com/2sem)
