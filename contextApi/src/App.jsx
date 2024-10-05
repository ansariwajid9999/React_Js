import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './assets/Child'

// CREATE PROVIDER CONSUMER
// IS IT PROBLEMATIC ? YES , IT CAN BE SOLVE USING useContext()

const data = createContext();
const data1 = createContext();

function App() {
  const name = "Wajid";
  const gender = "Male";

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Child/>
        </data1.Provider>
      </data.Provider>
    </>
  )
}

export default App
export {data , data1}
