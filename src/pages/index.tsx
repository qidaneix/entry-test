import { useMemo, useState } from 'react';
import { A } from './components/A';
import { B } from './components/B';
import { C } from './components/C';
import { D } from './components/D';
import { produce } from 'immer';

export default function IndexPage() {
  const [state, setState] = useState({ nums: 0 });

  const func = useMemo(() => {
    console.warn('useMemo run');
    return () => {
      console.log(state);
      return state;
    };
  }, [state]);

  return (
    <div>
      <button
        onClick={() => {
          setState(
            produce((state) => {
              state.nums += 1;
              console.log('state', state.nums);
              return state;
            }),
          );
        }}
      >
        add state
      </button>
      <button
        onClick={() => {
          setState(
            produce((state) => {
              state.nums -= 1;
              console.log('state', state.nums);
              return state;
            }),
          );
        }}
      >
        minus state
      </button>
      <h2>{state.nums}</h2>
      <A func={func}></A>
      <B func={func}></B>
      <C func={func}></C>
      <D func={func}></D>
      {/* <A></A>
      <B></B>
      <C></C>
      <D></D> */}
    </div>
  );
}
