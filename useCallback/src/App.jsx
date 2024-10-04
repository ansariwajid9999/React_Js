import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [add, setAdd] = useState(0)
  const [count , setCount] = useState(0)
  
  // const Learning = () => {

  // }

  const Learning = useCallback(() => {

  },[count])

  return (
    <>
      <h1>Learning useCallback</h1>
      {/* WHENEVER I HIT ADDITION BUTTON CHILD COMPONENT PRINTS EVERYTIME HERE I HAVE ONLY 1 BUTTON 
      WHAT IF I HAVE MANY BUTTON THAN IT IS A PROBLEM IT RERENDER A LOT OF TIMES SO , IF MY FUNCTION
      RERENDER A LOT I WILL WRAP IT WITH useMemo HOOK IT RETURNS MEMOIZED VALUE AND useCallback RETURN 
      MEMOIZED FUNCTION.*/}

      {/* REFENCIAL EQUALTY => WHENEVER OUR PAGE IS RERENDER  FUNCTIONS WILL BE RECREATE SIMILALRY ,
      OUR LEARNING FUNCTION RECREATE SO THE CHILD COMPONENT THOUGHT THERE WILL BE SOME CHANGES MADE IN 
      LEARNING FUNCTION SO PRINT CHILD COMPONENT*/}
      <Child Learning = {Learning} count = {count}/>
      <h1>{add}</h1>
      <button onClick={(e) => setAdd((prevAdd) => prevAdd + 1)}>Additon</button>
      <h1>{count}</h1>
      <button onClick={(e) => setCount((prevCount) => prevCount + 5)}>Count</button>
    </>
  )
}

export default App
