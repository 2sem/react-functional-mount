# react-functional-mount

> Mount/Unmount hook for functional component

[![NPM](https://img.shields.io/npm/v/react-functional-mount.svg)](https://www.npmjs.com/package/react-functional-mount) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-functional-mount
```

## Usage

```tsx
import { useDidMount, useWillUnmount } from 'react-functional-mount'

export const Example: React.FC = () => {
  useDidMount(() => {
    console.log('Example', 'componentDidMount')
  })

  useWillUnmount(() => {
    console.log('Example', 'componentWillUnmount')
  })

  return <Component />
}
```

## License

MIT © [2sem](https://github.com/2sem)
