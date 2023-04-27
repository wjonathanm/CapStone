import {Link, useNavigate} from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';
import {useEffect, useState} from "react";
const Navbar = () => {
    const [Eid, setEid] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
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
                }
            }
        )
    }, [])
        function Logout() {
            sessionStorage.clear();
            navigate("/");
            window.history.pushState({}, null, "/");
            window.location.replace("/");
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
                <br/>
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