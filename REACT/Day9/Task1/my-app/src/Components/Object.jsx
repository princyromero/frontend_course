import React, { useState } from 'react'

const Object = () => {
    const [obj,setObj] = useState({name:"React",age:30})
  
  const handleClcik = ()=>{

    setObj({...obj,react:"new"})

  }
    return (
   <>
   <button onClick={handleClcik}>Click</button>
   <div>
    <h1>
        {obj.name}
    </h1>
    <p>{obj.age}</p>
    <p>{obj.react}</p>
   </div>
   </>
  )
}

export default Object