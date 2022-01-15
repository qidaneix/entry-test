import * as React from 'react';
import { ThemeContext } from '../contexts';

export const B: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  return <section style={theme as any}>this is section B</section>;
};
