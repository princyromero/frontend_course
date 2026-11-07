import {useEffect, useState } from "react";
const Todo = () => {
    const [usertask ,setuserTask] =useState("")
    const [usercontact ,setuserContact] =useState("")
    const [userdate ,setuserDate] =useState("")
    const [datashow ,setDatashow] =useState([])

    const handleTask =(e) =>{
      setuserTask(e.target.value)

    }
    const handleContact =(e) =>{
      setuserContact(e.target.value)
    } 
    const handleDate =(e) =>{
      setuserDate(e.target.value)
    }
    const handleclick =(e) =>{
      e.preventDefault ()
      const obj ={id:Data.now(),usertask,usercontact,userdate}
      const copy=JASON.parse(localStorage.getItem("Taskdatas")) ||[]
     copy.push(obj)
     localStorage.setItem("taskdatas",JASON.stringify(copy))
     alert('Successfully Task Added')
     setuserTask("")
     setuserContact("")
     setuserDate("")
    }
    useEffect(() =>{
      const show =localStorage.getItem("task datas")
      const change =JASON.parse(show)
      setDatashow(change)
    },[handleclick])
  return (<>
  <form>
    <input type=" text" value={usertask} placeholder="Enter the Task" onChange={handleTask} />
    <input type=" text" value={usertask} placeholder="Enter the Contact" onChange={handleContact} />
    <input type=" text" value={usertask} placeholder="Enter the Date" onChange={handleDate} />
    <button onClick={handleclick}>AddClick</button>
  </form>
  <div>
    {datashow.map((e) =>) }
    <div key={e.id}>
      <h1>{e.usertask}</h1>
      <p>{e.usercontact}</p>
      <p>{e.userdate}</p>
    </div>
  </div>
  
  
  
  </>)
}

export default Todo