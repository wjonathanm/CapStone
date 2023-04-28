import {Link, useNavigate} from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';
import {useEffect, useState} from "react";
const Navbar = () => {
    const [Eid, setEid] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Hiredate, setHireDate] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("/ePTO").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setEid(data[i].id);
                    setFname(data[i].firstname);
                    setLname(data[i].lastname);
                    setHireDate(data[i].hiredate);
                }
            }
        )
    }, [])
    //New One jj
    function Logout() {
        sessionStorage.clear();
        navigate("/");
        window.history.pushState({}, null, "/");
        window.location.replace("/");
    }
    //Old one
    // function Logout(){
    //     sessionStorage.clear();
    //     navigate("/")
    // }
    return ( 
        <nav className="navbar">
            <div className="navbar-top">
                <img style={{width: "150px", height: "65px", padding: "5px"}} src={logo} alt="aldi_logo" />
                <div className="links">
                    <Link to="/ePTO">Home</Link>
                    <Link to="/eRequest">Request</Link>
                    <Link to="/ehistory">History</Link>
                    {/* <Link to="/eCalendar">Calendar</Link> */}
                </div>
                <div className="nav-button">
                    <p className="items">Hello! {Fname} {Lname}</p>
                    <p className="items">{Eid}</p>
                    <a href="/" className="log-out" onClick={Logout}>Logout</a>
                </div>
            </div>
        </nav>

     );
}
 
export default Navbar;