import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let[menu,setMenu]=useState(false)
    return ( 
        <div className="navbar">
            
            <div className="image">
                <img src="data:image/png;base64,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" style={{width:"50px",height:"auto"}} alt="" />
                <p>YOGA CLASS</p>       
            </div>
            <div className="links">
                <Link to="">HOME</Link>
                <Link to="">ABOUT US</Link>
                <Link to="">SERVICES</Link>
                <Link to="">CONTACT US</Link>
            </div>

            {!menu && <div className="hamberger"
            onClick={()=>{setMenu(!menu)}}>
            <i class='bx bx-menu'></i>
            </div>}
            {menu && <div className="menu">
                <Link to="">HOME</Link>
                <Link to="">ABOUT US</Link>
                <Link to="">SERVICES</Link>
                <Link to="">CONTACT US</Link>
            </div>}

            {menu && <div className="clear"
            onClick={()=>{setMenu(!menu)}}>
            <i class='bx bx-x'></i>
            </div>}

        </div>
     );
}
 
export default Navbar;
