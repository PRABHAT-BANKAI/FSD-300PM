import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = ({number=12}) => {

  const value = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>Count : {number}</h1>
      <h1>Count2 : {value}</h1>
    </div>
  )
}



export default Child2