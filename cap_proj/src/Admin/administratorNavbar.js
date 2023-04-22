import {Link, useNavigate} from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';

const Navbar = () => {
    const navigate = useNavigate()
    function Logout(){
        sessionStorage.clear();
        navigate("/")
    }
    return ( 
        <nav className="navbar">
            <div className="navbar-top">
                <img style={{width: "150px", height: "65px", padding: "5px"}} src={logo} alt="aldi_logo" />
                <div className="links">
                    <Link to="/administratorHome">Home</Link>
                    <Link to="/administratorSetHoliday">SetHoliday</Link>
                    <Link to="/administratorCUser">EmployeeInfo</Link>
                </div>
                <div className="nav-button">
                    <button className="log-out" onClick={Logout}>Log Out</button>
                </div>
            </div>
        </nav>

     );
}
 
export default Navbar;