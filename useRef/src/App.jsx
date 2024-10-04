import { useState ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Wajid")
  const refElement = useRef("");

// THIS WILL PRINT OBJECT {CURRENT = ''} THROUGH WHICH WE CAN MANIPULATE THE DOM. 
// console.log(refElement);

  function reset(){
    setName("");
    refElement.current.focus();
    refElement.current.style.color = "black";
  }
  function colorChange(){
    refElement.current.style.color = "red";
  }
  function changeName(){
    refElement.current.value = "ansari";
  }
  return (
    <>
      <h1>Learning useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={reset}>Reset</button>
      {" "}
      <button onClick={colorChange}>ColorChange</button>
      {" "}
      <button onClick={changeName}>ChangeName</button>
    </>
  )
}

export default App
