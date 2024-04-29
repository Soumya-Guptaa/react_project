import { createContext } from 'react';

const countContext = createContext({
  count: 0,
  setCount: () => {}  // Dummy function, will be replaced in provider
});

export default countContext;