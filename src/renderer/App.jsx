import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <h1 style={{ color: 'red' }}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>+</button>
      <button type="button" onClick={() => { setCount(count - 1); }}>-</button>
    </>
  );
};
