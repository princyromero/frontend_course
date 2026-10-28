import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import StringRendering from "./Pages/StringRendering"
import NumberRendering from "./Pages/NumberRendering"
import BooleanRendering from "./Pages/BooleanRendering"
import FaslyRendering from "./Pages/FaslyRendering"
import Banner from "./components/Banner"
import Home from "./Pages/Home"



const App =()=>{
  return(<>
 
  <Navbar/>
  <Banner/>
  
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/String" element={<StringRendering/>}/>
    <Route path ="/Number" element={<NumberRendering/>}/>
    <Route path ="/Boolean" element={<BooleanRendering/>}/>
    <Route path ="/Fasly" element={<FaslyRendering/>}/>
  </Routes>
  </>)
}
export default App
