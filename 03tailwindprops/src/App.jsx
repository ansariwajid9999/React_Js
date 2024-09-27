import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "wajid ansari",
    age: 25
  };

  let myArr = [1 , 2 , 3];
  let wajid = "WajidAnsari";

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      
     {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28532430/pexels-photo-28532430/free-photo-of-sailing-ship-at-sunset-near-tropical-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-med">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      {/* <Card channel="CahiAurCode"  someObj = {myObj} someArr={myArr}/> */}
      <Card username="ChaiaurCode" description="I want to explore react JS."/>
      <Card username={wajid} description="I want to learn React.JS."/>
      <Card username={wajid}/>
    </>
  )
}

export default App
