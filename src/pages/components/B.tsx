import { memo, useRef } from 'react';

export const B = memo(function ({ func }) {
  const ref = useRef(0);
  console.log('B rendered');
  func();
  return (
    <div>
      <h1>B: memo function</h1>
      <h2>{ref.current++}</h2>
      <h2>{func().nums}</h2>
    </div>
  );
});
