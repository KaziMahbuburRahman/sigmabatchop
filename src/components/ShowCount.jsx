import React, { useContext } from 'react'
import { counterContext } from '../context/context'

export default function ShowCount() {
  const value = useContext(counterContext)
  return (
    
     
          <div>{value.count}</div>

  )
}
