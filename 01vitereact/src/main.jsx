import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
function MyApp(){
  return(
    <h1>Hello everyOne | wajid Here 😃</h1>
  )
}
*/

/*
To run this we have to give ReactElement in createRoot without strict mode on beacuse ReactElement is an
object if it is an function we have to pass ReactElement() , but still it is not working beacuse this 
is custom react and in original react library it is not like ==> type: "a" , it may be wajid: "a" , naming
convention is not matching.


const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

*/

/*
This will work becuase we are passing only object without any pre defined naming convention so , react 
library convert it according to its own naming convention. pass AnotherElement in createRoot with no strict.

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)
*/

const anotherUserName = " Chai aur code"
const ReactElement1 = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'Click me to visit google',
  anotherUserName
)

createRoot(document.getElementById('root')).render(
 // <App />
 ReactElement1
)
