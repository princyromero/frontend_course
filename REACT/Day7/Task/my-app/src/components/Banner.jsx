import { Link } from "react-router-dom"

const Banner = () => {
  return (<>
  <div className="bg-fuchsia-600 font-medium p-2 ">
    <div className="flex gap-15 mx-14">
        <Link to ="/String" className="bg-amber-50 p-2 rounded-2xl w-50 text-center">String Rendering</Link>
        <Link to ="/Boolean"className="bg-amber-50 p-2 rounded-2xl w-50 text-center">Boolean Rendering</Link>
        <Link to ="/number"className="bg-amber-50 p-2 rounded-2xl w-50 text-center">Number Rendering</Link>
        <Link to ="/fasly"className="bg-amber-50 p-2 rounded-2xl w-50 text-center">Fasly Rendering</Link>
     </div>   
  </div>
  
  </>
    
  )
}

export default Banner