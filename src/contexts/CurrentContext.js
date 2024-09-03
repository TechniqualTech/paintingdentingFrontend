import { createContext, useState } from 'react';

const CurrentContext = createContext();

const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState('');

  return (
    <CurrentContext.Provider value={{ current, setCurrent }}>
      {children}
    </CurrentContext.Provider>
  );
};

export { CurrentProvider, CurrentContext };

