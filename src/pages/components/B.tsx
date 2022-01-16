import * as React from 'react';
import { ThemeContext, BorderContext } from '../contexts';

export const B: React.FC = () => {
  const { theme, change } = React.useContext(ThemeContext);
  const border = React.useContext(BorderContext);

  return (
    <section style={{ ...(theme as Object), ...(border as Object) } as any}>
      this is section B
      <button
        onClick={() => {
          change((preS: any) =>
            preS.fontWeight === 900
              ? { ...preS, fontWeight: 300 }
              : { ...preS, fontWeight: 900 },
          );
        }}
      >
        change
      </button>
    </section>
  );
};
