import * as runtime from 'react/jsx-runtime';

const useMDSXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({...runtime }).default
}

const components = {
  Image,
}