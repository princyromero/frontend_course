import { Route, Routes } from "react-router-dom"
import Register from "./Pages/Register"
import Navbar from "./Component/Navbar"
import Login from "./Pages/Login"
import  Dashboard from "./Pages/Dashboard"

const App = () => {
  return (<>
  <Navbar/>
  
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
  </>)
}

export default App