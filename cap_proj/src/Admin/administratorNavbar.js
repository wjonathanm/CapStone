import { Link } from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <div className="navbar-top">
                <img style={{width: "150px", height: "65px", padding: "5px"}} src={logo} alt="aldi_logo" />
                <div className="links">
                    <Link to="/zHome">Home</Link>
                    <Link to="/zCalendar">Calendar</Link>
                    <Link to="/zSetHoliday">SetHoliday</Link>
                    <Link to="/zCalendar">Calendar</Link>
                </div>
                <div className="nav-button">
                    <button className="log-out" >Log Out</button>
                </div>
            </div>
        </nav>

     );
}
 
export default Navbar;