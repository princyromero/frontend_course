import { useState } from "react";


const App = () => {
  const[showname,setshowName]=useState("")
  const[showage,setshowAge]=useState("")
  const[shownumber,setshowNumber]=useState("")
  const [showdatas,setshowDatas] =useState([])

  const handlechangeName =(e) =>{
    setshowName(e.target.value)

  }
  const handlechangeAge =(e) =>{
    setshowAge(e.target.value)

  }
  const handlechangeNumber =(e) =>{
    setshowNumber(e.target.value)

  }
  const handleclick =(e) =>{
   e.preventDefault ()
   let datas ={id:datas.now(),name:showname,age:showage,number:shownumber}
   let copy=[...showdatas]
   copy.push(datas)
   setshowDatas(copy)
  }
 
  return (<>
  <div>
    <form>
      <input type="text" placeholder="enter the name" value={"showname"} onChange={handlechangeName} />
      <input type="text" placeholder="enter the age"value={"showage"} onChange={handlechangeAge} />
      <input type="text" placeholder="enter the number" value={"shownumber"} onChange={handlechangeNumber} />
      <button onClick={handleclick}>register</button>
    </form>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {showdatas.map ((e,i) =>(
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
   

  </div>
  
  </>)
}

export default App