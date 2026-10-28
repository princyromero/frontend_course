import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"

const App = () => {
  return (<>
  <Navbar/>
   <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/about" element ={<About/>}/>
    <Route path ="/contact" element ={<Contact/>}/>
    <Route path ="/services" element ={<Services/>}/>
   </Routes>
  
  </>)
}

export default App