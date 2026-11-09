import {useEffect, useState } from "react"
const Todo = () => {
  const [usertask, setuserTask] = useState("")
  const [usercontact, setuserContact] = useState("")
  const [userdate, setuserDate] = useState("")
  const [datashow, setDatashow] = useState([])

  const handleTask = (e) => {
    setuserTask(e.target.value)
  }

  const handleContact = (e) => {
    setuserContact(e.target.value)
  }

  const handleDate = (e) => {
    setuserDate(e.target.value)
  }

  const handleclick = (e) => {
    e.preventDefault()

    const obj = {id: Date.now(),usertask,usercontact,userdate}

    const copy = JSON.parse(localStorage.getItem("taskdatas")) || []

    copy.push(obj)

    localStorage.setItem("taskdatas", JSON.stringify(copy))

    setDatashow(copy)

    alert("Successfully Task Added")

    setuserTask("")
    setuserContact("")
    setuserDate("")
  }

  useEffect(() => {
    const show = localStorage.getItem("taskdatas")
    const change = JSON.parse(show) || []
    setDatashow(change)
  }, [])

  return (<>
  <form>
    <input type="text"value={usertask} placeholder="Enter the Name" onChange={handleTask} />
    <input type="text" value={usercontact} placeholder="Enter the Contact" onChange={handleContact}/>
    <input type="date" value={userdate} onChange={handleDate}/>
    <button onClick={handleclick}>Add Click</button>

      </form>

      <div>
        {datashow.map((e) => (
          <div key={e.id}>
            <h1>{e.usertask}</h1>
            <p>{e.usercontact}</p>
            <p>{e.userdate}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo