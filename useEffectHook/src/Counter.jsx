import React from 'react'
import { useState , useEffect} from 'react'

// IF WE HAVE TO PERFORM ANY TASK IN BETWEEN THE COMPONENT LIFECYCLE THEN WE USE USEEFFTCT HOOK.
// COMPONENT LIFE CYCLE INITIALIZING -> MOUNTING -> UPDATION -> UNMOUNTING -> INITILIZATION

function Counter() {
    let [count, setCount] = useState(9)

// EMPTY DEPENDENCY ARRAYS MEANS -> WHOLE COMPONENT
// ELSE IF DEPENDENCIES CHANGE IT WILL SHOW EFFECT

    useEffect(() => {
        console.log("Counter Mounted");
    
        return () => {
          console.log("Unmounted Counter");
        }
    } , [])
    
    useEffect(() => {
        console.log("User updated Counter" , count);

        return () => {
            console.log("Counter useEffect return" , count);
        }
    } , [count])

    const increase = () => {
    setCount((prevCounter) => prevCounter + 1);
    }

    const decrease = () => {
    setCount((prevCounter) => prevCounter - 1);
    }

  return (
    <>
     <h1>Counter_Program</h1>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      {" "}
      <button onClick={decrease}>Decrease</button><br /><br />
    </>
  )
}

export default Counter