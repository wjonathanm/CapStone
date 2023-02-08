import { Link } from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <div className="navbar-top">
                <img style={{width: "150px", height: "65px", padding: "5px"}} src={logo} alt="aldi_logo" />
                <div className="links">
                    <Link to="/ePTO">Home</Link>
                    <Link to="/eRequest">Request</Link>
                    <Link to="/eHistory">History</Link>
                    <Link to="/eCalendar">Calendar</Link>
                </div>
                <div className="nav-button">
                    <button className="log-out" >Log Out</button>
                </div>
            </div>
            <div className="navbar-bottom">
                <ul className="list">
                    <li className="items">First and Last Name</li>
                    <li className="items">ID</li>
                    <li className="items">Anniversary Date</li>
                </ul>
            </div>
        </nav>

     );
}
 
export default Navbar;