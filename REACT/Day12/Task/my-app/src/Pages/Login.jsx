import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  
  const Navigate =useNavigate()
   
  const [userEmail,setuserEmail] =useState("")
  const [userPassword,setuserPassword] =useState("")
  const [Error,setError] =useState("")

const handleEmail = (e) => {
    setuserEmail(e.target.value)
}

const handlePassword = (e) => {
    setuserPassword(e.target.value)
}

const handleclick = (e) => {
    e.preventDefault()

    if (!userEmail || !userPassword) {
        setError("Please Fill The Form")
        return
    }

    let checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []

    const CheckEmail = checkDatas.find((e) => e.userEmail === userEmail && e.userPassword === userPassword)

    if (!CheckEmail) {
      setError("Invalid User")
        return
    }
   
    localStorage.setItem("isactive",JSON.stringify(CheckEmail))
    setError("your correct user")
    
    setuserEmail("")
    setuserPassword("")

    setError("Login Successfully")
    
    Navigate("/")

}

   
  return (<>
  <div className="bg-blue-500 p-10 flex flex-col justify-center items-center h-100 ">
    <div className="bg-white shadow rounded p-4 w-110">
        <h2 className="text 3x1 mb-2">Login</h2>
        <p>Login Here if your Already Registered!!</p>
        <p className="text-red-400">{Error}</p>
    </div>
    <form className="bg-white shadow rounded flex flex-col p-5 gap-6 columns w-110 h-60">
        
        <div>
            <input type="Email" onChange={handleEmail} value={userEmail} placeholder="Enter The Email" className="border w-100 p-1 rounded shadow"/>
        </div>
        <div>
            <input type="Password" onChange={handlePassword} value={userPassword} placeholder="Enter The Password" className="border w-100 p-1 rounded shadow"/>
        </div>
        <div>
            <button onClick={handleclick} className="bg-orange-400 text-white rounded p-1 w-30 shadow">Login</button>
        </div>
    </form>
  </div>
 
  </>)
  }

export default Login