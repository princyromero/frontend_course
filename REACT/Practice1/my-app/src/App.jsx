import { useState } from "react"
const App = () => {
  const [showName,setshowName] =useState("")
  const [showAge,setshowAge]= useState("")
  const [showNumber,setshowNumber]=useState("")
  const [showDatas,setshowDatas] =useState([])

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
   let datas = {id: Date.now(),name: showName,age: showAge,number: showNumber};

    let copy = [...showDatas]
    copy.push(datas)

    setshowDatas(copy)
  }
 
  return (<>
  <div>
    <form>
      <input type="text" placeholder="enter the name" value={showName} onChange={handlechangeName} />
      <input type="text" placeholder="enter the age"value={showAge} onChange={handlechangeAge} />
      <input type="text" placeholder="enter the number" value={showNumber} onChange={handlechangeNumber} />
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
       {showDatas.map ((e,i) =>(
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