import React , {useContext} from 'react'
import {data , data1 } from './App';

function ChildB() {
    const FirstName = useContext(data);
    const MyGender = useContext(data1);
  return (
    <h1>Hi my name is {FirstName} and my gender is {MyGender}</h1>
  )
}

export default ChildB