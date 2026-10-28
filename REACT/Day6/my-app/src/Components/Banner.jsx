import { Link } from "react-router-dom"

const Banner = () => {
  return (<>
  <div className="bg-pink-400 p-3 font-bold flex gap-2">
    <div className="flex gap-5">
    <Link to ="/About" className="bg-amber-400 p-2 rounded-2xl w-20" >About</Link>
    <Link to ="/Contact" className="bg-amber-400 p-2 rounded-2xl w-20" >Contact</Link>
    <Link to ="/Services" className="bg-amber-400 p-2 rounded-2xl w-20">services</Link>
    </div>
  </div>
  </>)
}

export default Banner