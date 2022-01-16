import { Component } from 'react';
import { ThemeContext, BorderContext } from '../contexts';

export class C extends Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, change }) => (
          <BorderContext.Consumer>
            {(border: any) => (
              <section style={{ ...theme, ...border }}>
                this is section C
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
            )}
          </BorderContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
