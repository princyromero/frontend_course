import { useState } from "react"


const BooleanValues = () => {
    const [isActive,setIsActive] = useState(true)
  
   const handleClick = ()=>{
    setIsActive(!isActive)
   }
    return (
    <>
    <h1>{isActive?"This is React":"This is Not React"}</h1>
    <button onClick={handleClick}>{isActive?"React":"Node"}</button>
    
    </>
  )
}

export default BooleanValues