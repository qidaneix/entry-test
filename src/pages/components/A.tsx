import * as React from 'react';
import { C } from './C';
import { B } from './B';
import { ThemeContext } from '../contexts';

export const A: React.FC = () => {
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: 'green' }}>
        <h1>hello context</h1>
        <B />
        <C />
      </ThemeContext.Provider>
    </>
  );
};
