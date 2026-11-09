import { useState } from "react"


const Register = () => {
    const[userName, setuserName] =useState("")
    const[userEmail, setuserEmail] =useState("")
    const[userMobile, setuserMobile] =useState("")
    const[userDatas, setuserDats] =useState([])
    const [editId, setEditId] = useState(null)

    const handleName =(e) =>{
        setuserName(e.target.value)
    }
    const handleEmail =(e) =>{
        setuserEmail(e.target.value)
    }
    
    const handleMobile =(e) =>{
        setuserMobile(e.target.value)
    }
    const handleclick =(e) =>{
        e.preventDefault()
        const obj ={id:Date.now(),userName,userEmail,userMobile}
        const copy =[...userDatas]
        copy.push(obj)
        setuserDats(copy)
        alert("successfully Added")
        setuserName("")
        setuserEmail("")
        setuserMobile("")
    }

    const handleEdit =(users) =>{
        setuserName(users.userName)
        setuserEmail(users.userEmail)
        setuserMobile(users.userMobile)
        setEditId(users.id)
    }
    const handleupdate =(e) =>{
        e.preventDefault
    }
    const handleDelete = (id) => {
  const deleteData = userDatas.filter((e) => e.id !== id)

  setuserDats(deleteData)

  localStorage.setItem("userdatas", JSON.stringify(deleteData))
}
  return (<>

  <form>
    <input type="text" value={userName} onChange={handleName} placeholder="Enter The Name" />
    <input type="text" value={userEmail} onChange={handleEmail} placeholder="Enter The Email" />
    <input type="text" value={userMobile} onChange={handleMobile} placeholder="Enter The Mobile" />
    {editId==null?<button onClick={handleclick}>Register</button>:<button onClick={handleupdate}>Update</button>}
  </form>

  
<div>
  {userDatas.map((e) => (
    <div key={e.id}>
      <h1>{e.userName}</h1>
      <p>{e.userEmail}</p>
      <p>{e.userMobile}</p>

      <button onClick={() => handleEdit(e)}>Edit</button>
      <button onClick={() => handleDelete(e.id)}> Delete</button>
    </div>
  ))}
</div>

  
  </>)
}

export default Register