import { Link } from "react-router-dom"

const Navbar =() =>{
    return(<>
    
    <div className="bg-blue-400 font-bold p-3 flex justify-start gap-10 items-center">
        <div className="mx-10">Logo</div>
        <div>
            <Link to= {"/"} >Home</Link>
        </div>
    </div>
    
    </>)
}
export default Navbar