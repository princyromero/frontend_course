import { useState } from "react"


const ArrObj = () => {
    const [arrobj,setArrObj] = useState([{name:"React",age:30},{name:"JS",age:90},{name:"Node",age:32},{name:"Reacts",age:70}])
  
    const handleClick = ()=>{

        const copy = [...arrobj]

        copy.push({name:"Ndeos",age:727})
        
        setArrObj(copy)

    }

    const updateValue = ()=>{


        let copy = [...arrobj]

        copy = arrobj.map((e,i)=>e.name=="React"?{...arrobj,name:"React 12"}:e)

        console.log(copy);
        
        
        setArrObj(copy)

    }

    const handleDlete = (userindex)=>{

        const detele = arrobj.filter((e,i)=>userindex!==i)

        setArrObj(detele)

    }
    return (
    <>
    <div>
    {arrobj.map((e,i)=>(
        <div key={i}>
            <h2>{e.name}</h2>
            <p>{e.age}</p>
            <button onClick={()=>handleDlete(i)}>delete</button>
        </div>
    ))}
    </div>

    <div>
        <button onClick={handleClick}>Click to add</button>

        <button onClick={updateValue}> Value Update</button>
    </div>
    </>
  )
}

export default ArrObj