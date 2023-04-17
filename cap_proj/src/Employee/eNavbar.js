import { Link } from "react-router-dom";
import logo from '../imgs/aldi_logo1.png';
import {useEffect, useState} from "react";
const Navbar = () => {
    const [Eid, setEid] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Hiredate, setHireDate] = useState("")
    const [Lid, setLid] = useState("")
    const [Role, setRole] = useState("")
    const [Sick, setSick] = useState("")
    const [Personal, setPersonal] = useState("")
    const [Vacation, setVacation] = useState("")
    useEffect(() => {
        fetch("/ePTO").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setEid(data[i].id);
                    setEmail(data[i].email);
                    setFname(data[i].firstname);
                    setLname(data[i].lastname);
                    setLid(data[i].leaderid);
                    setRole(data[i].role);
                    setSick(data[i].ptobalancesick);
                    setPersonal(data[i].ptobalancepersonal);
                    setVacation(data[i].ptobalancevacation);
                    setHireDate(data[i].hiredate);

                }
            }
        )
    }, [])
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
                    <button className="log-out" >Log Out</button>
                </div>
            </div>
            <div className="navbar-bottom">
                <ul className="list">
                    <li className="items">{Fname} {Lname}</li>
                    <li className="items">{Eid}</li>
                    <li className="items">{Hiredate}</li>
                </ul>
            </div>
        </nav>

     );
}
 
export default Navbar;