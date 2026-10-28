import {Link} from "react-router-dom";

const Navbar =() =>{
    return(<>
    <div className="bg-amber-300 font-bold p-2 flex justify-between items-center">
        <div className="mx-4 bg-amber-700 p-1 rounded-2xl w-48 text-center ">Logo</div>
        <div className="mx-4 flex gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Help"}>Help</Link>
        </div>
    </div>

    </>)

}
export default Navbar   