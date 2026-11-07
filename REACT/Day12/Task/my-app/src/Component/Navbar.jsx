import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  const[showDatas,setshowDatas] =useState(null)
    useEffect(() =>{
      const datas=JSON.parse(localStorage.getItem("isActive"))
      setshowDatas(datas)
    },[])
 
 
 return (<>
  <div className="bg-pink-300 p-3 flex justify-between items-center">
    <div>Logo</div>
    <div className="flex gap-10">
        <Link to ={"/Register"}>Register</Link>
        <Link to ={"/Login"}>Login</Link>
        <Link to ={"/"}>{showDatas ==null? "home" :showDatas.userName}</Link>

    </div>
  </div>
  
  </>)
}

export default Navbar