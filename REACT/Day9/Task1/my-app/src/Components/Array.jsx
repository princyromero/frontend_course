import { useState } from "react"


const Array = () => {
    const [array,setArray] = useState([1,2,3,4,5,6,7,8])
   

    const handleCLick = ()=>{

        const copy = [...arr]

       copy[2] = 30000

       const deleted = arr.filter((e,i)=>i!==2)

        setArray(deleted)

    }
    
    return (
    <>
    <div>
        {array.map((e,i)=>(
            <div key={i}>
                <p>{e}</p>
            </div>
        ))}


        <button onClick={handleCLick}>On Update Array</button>
    </div>
    </>
  )
}

export default Array