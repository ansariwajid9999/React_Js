import React from 'react'
import useCounter from './useCounter'

function Counter2() {
    const [count , increment , decrement] = useCounter();

  return (
    <div>
        <h1>Learning CustomHook</h1>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
        {" "}
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter2