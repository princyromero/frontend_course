import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import StringRendering from "./Pages/StringRendering"
import NumberRendering from "./Pages/NumberRendering"
import BooleanRendering from "./Pages/BooleanRendering"
import FaslyRendering from "./Pages/FaslyRendering"
import Banner from "./components/Banner"



const App =()=>{
  return(<>
 
  <Navbar/>
  
  <Routes>
    <Route path ="/" element={<Banner/>}/>
    <Route path ="/String" element={<StringRendering/>}/>
    <Route path ="/Number" element={<NumberRendering/>}/>
    <Route path ="/Boolean" element={<BooleanRendering/>}/>
    <Route path ="/Fasly" element={<FaslyRendering/>}/>
  </Routes>
  </>)
}
export default App
