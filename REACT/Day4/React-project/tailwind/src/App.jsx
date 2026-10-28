import { Route ,Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home";
const App = () => {
  return (<>
  <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Help" element={<Help/>}/>
    </Routes>
  </>)
}

export default App