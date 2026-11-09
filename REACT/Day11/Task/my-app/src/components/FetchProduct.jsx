import { useEffect, useState } from "react"


const FetchProduct = () => {
    const [userdata,setuserData] =useState([])
    const fetchGet =async () =>{
        const res = await fetch("https://dummyjson.com/products?limit=5")
        const change = await res.json()
        setuserData(change.products) 
    }
    useEffect(()=>{
        fetchGet()
    },[])
  return (<>
  <div>{userdata.map((e,i) =>(
    <div key={e.id}>
        <img src={e.images}  style={{width:"150px"}} alt=""/>
        <h1>{e.title}</h1>
        <p>{e.price}</p>
    </div>
  ))}
  </div>
  
  </>)
}

export default FetchProduct