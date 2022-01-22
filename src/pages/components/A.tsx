import { useRef } from 'react';

export function A({ func }) {
  const ref = useRef(0);
  console.log('A rendered');
  func();
  return (
    <div>
      <h1>A: normal function</h1>
      <h2>{ref.current++}</h2>
      <h2>{func().nums}</h2>
    </div>
  );
}
