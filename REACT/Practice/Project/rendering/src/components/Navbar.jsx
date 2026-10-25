import Button from "./Button"

const Navbar =() =>{
    return (<>
    
    <div className="Navbar">
        <div className="logo">
         <img src="./logo/images.jpg" />
        </div>
        <div className="Link">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Login</a>
            <Button/>
        </div>
    </div>
    
    </>)
}
export default Navbar