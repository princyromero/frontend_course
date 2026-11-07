import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const Navigate =useNavigate()
    const [userName ,setuserName]= useState("")
    const [userEmail,setuserEmail] =useState("")
    const [userPassword,setuserPassword] =useState("")
    const [Error,setError] =useState("")

    const handleName =(e) =>{
        setuserName(e.target.value)
    }
    const handleEmail =(e) =>{
        setuserEmail(e.target.value)
    }
    const handlePassword =(e) =>{
        setuserPassword(e.target.value)
    }
    
    const handleclick = (e) => {
    e.preventDefault()

    if (!userName || !userEmail || !userPassword) {
        setError("Please Fill The Form")
        return
    }

    let checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []

    const CheckEmail = checkDatas.find((e, i) => e.userEmail === userEmail)

    if (CheckEmail) {
        setError("Already Used")
        return
    }

    let obj = {id: Date.now(),userName,userEmail,userPassword}

    let datas = JSON.parse(localStorage.getItem("authdatas")) || []

    datas.push(obj)

    localStorage.setItem("authdatas", JSON.stringify(datas))

    setuserName("")
    setuserEmail("")
    setuserPassword("")

    setError("Successfully Registered")

    Navigate("/Login")
}


  return (<>
  <div className="bg-purple-500 p-10 flex flex-col justify-center items-center h-100 ">
    <div className="bg-white shadow rounded p-4 w-110">
        <h2 className="text 3x1 mb-2">Register</h2>
        <p>Register Here if New User!!</p>
        <p className="text-red-400">{Error}</p>
    </div>
    <form className="bg-white shadow rounded flex flex-col p-5 gap-6 columns w-110 h-60">
        <div>
            <input type="Name" onChange={handleName} value={userName} placeholder="Enter The Name" className="border w-100 p-1 rounded shadow"/>
        </div>
        <div>
            <input type="Email" onChange={handleEmail} value={userEmail} placeholder="Enter The Email" className="border w-100 p-1 rounded shadow"/>
        </div>
        <div>
            <input type="Password" onChange={handlePassword} value={userPassword} placeholder="Enter The Password" className="border w-100 p-1 rounded shadow"/>
        </div>
        <div>
            <button onClick={handleclick} className="bg-green-400 text-white rounded p-1 w-30 shadow">Register</button>
        </div>
    </form>
  </div>
  </>)
}

export default Register