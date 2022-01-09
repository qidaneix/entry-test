import { useState } from 'react';

export function Outer(props) {
  const sb = 'ni cai sb';
  const [value, setValue] = useState(1);
  return (
    <div>
      <div>Outer</div>
      <div>{value}</div>
      {props.children(sb)}
      <button onClick={() => setValue((preValue) => preValue + 1)}>hh</button>
    </div>
  );
}
