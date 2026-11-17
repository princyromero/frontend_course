import React, { useState } from 'react'

const Number = () => {
    const [count,setCount] = useState(0)

    const handleClcik = ()=>{

        setCount(count+1)

    }

    const handleDec = ()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleDec}>Decrecve</button>
    <button onClick={handleClcik}>Click</button>
    </>
  )
}

export default Number