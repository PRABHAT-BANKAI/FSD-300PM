import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <>
    <h1>counter app</h1>
   <p>count = {count}</p> 
    <button onClick={()=>{
      setCount(count+1)

    }}>incr</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>decr</button>
    </>
  )
}

export default App