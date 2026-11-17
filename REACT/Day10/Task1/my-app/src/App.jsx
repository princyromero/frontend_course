
import { useState } from "react";

const App = () => {

  const [setname, setuserName] = useState("")
  const [setshowName, setuserShowName] = useState("")

  const handleChange = (e) => {
    setuserName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setuserShowName(setname)
  }

  return (<>
    <div>
      <h2>Student Form</h2>

      <form >

        <label>Student Name</label>

        <input type="text" placeholder="Enter student name" value={setname} onChange={handleChange}/>

        <button onSubmit={handleSubmit}>Submit</button>

      </form>

      <h3>Student Name {setshowName}</h3>

    </div>
  </>)
}

export default App
