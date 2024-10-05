import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './ChildA'

function App() {
  const name = "Wajid ansari";
  return (
    <>
      <p>Learning Prop Drilling</p>
      <ChildA name={name}/>
    </>
  )
}

export default App
