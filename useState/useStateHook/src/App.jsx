import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setcount] = useState(0)

  const increase = function increase(){
    if(count == 20){
      console.log("You can not increase further.");
    }
    else{
      setcount((prevCounter) => prevCounter + 1);
    }
  }
  const decrease = function decrease(){
    if(count == 0){
      console.log("You can not decrease further.");
    }
    else{
      setcount((prevCounter) => prevCounter - 1);
    }
  }

  return (
    <>
      <h1>Counter Program</h1>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      {" "}
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
