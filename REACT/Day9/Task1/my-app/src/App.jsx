import { useState } from "react"
import Array from "./Components/Array"
import ArrObj from "./Components/Arrayobj"
import BooleanValues from "./Components/Booleanvalues"
import Number from "./Components/Number"
import Object from "./Components/Object"
import Optional from "./Components/Optional"




const App = () => {

  const [datas,setDatas] = useState("This is Text")

  

  const handleText = ()=>{

      setDatas("Thsi is Change Text")

  }
  return (<>
  <Array/>
  <ArrObj/>
  <BooleanValues/>
  <Number/>
  <Object/>
  <Optional/>
  </>)
}

export default App