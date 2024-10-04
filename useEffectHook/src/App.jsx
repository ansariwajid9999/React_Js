import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
   const [state , setState] = useState(true)

  return (
    <>
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter/> : ""}
    </>
  )
}

export default App
