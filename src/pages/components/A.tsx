import * as React from 'react';
import { C } from './C';
import { B } from './B';
import { ThemeContext, BorderContext } from '../contexts';
import { xxx } from '../../data/theme';

export const A: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const border = React.useContext(BorderContext);

  const [themeS, setThemeS] = React.useState(theme);

  return (
    // 提供 Provider 的组件无法订阅到当前值
    <>
      <h2 style={{ ...theme, ...border }}>wonderfull</h2>
      <ThemeContext.Provider value={{ theme: themeS, change: setThemeS }}>
        <BorderContext.Provider value={xxx}>
          <h1 style={{ ...theme, ...border }}>hello context</h1>
          <B />
          <C />
        </BorderContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
