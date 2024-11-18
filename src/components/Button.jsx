import React, { useContext } from 'react'
import ShowCount from './ShowCount'
import { counterContext } from '../context/context'
export default function Button() {
  const value = useContext(counterContext)
  const {count, setCount} = value;
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>I am a button</button>
        <ShowCount/>
    </div>
  )
}
