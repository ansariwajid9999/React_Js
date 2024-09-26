import Chai from "./Chai"

/* Do not run this commented code its just for understanding
Evaulation expression {userName}  final evaluated outcomes to be written in {} , you can write if and else
in {} beacuse:

const anotherUserName = "if(){}else{}"
const ReactElement1 = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'Click me to visit google',

  if(){
  }
  else{
  }
)

*/
function App() {
  let userName = "Chai aur code"
  return(
    <>
    <Chai/>
    <h3>Chai aur code {userName}</h3>
    <p>Hello everyOne</p>
    </>
  )
}

export default App
