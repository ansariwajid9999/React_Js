import { useState } from 'react';
import './App.css'

function App() {
  let [counter , setCounter] = useState(5);

  const addvalue = () => {
    if(counter === 20){
      console.log("sorry! Can't increase the value further.");
    }
    else{
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if(counter === 0){
      console.log("error! , Can't decrease the value furhter.");
    }
    else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    
    <button onClick={addvalue}>Add Value {counter}</button><br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
