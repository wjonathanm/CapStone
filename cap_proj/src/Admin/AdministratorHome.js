import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AdministratorHome = () => {
    const [eid, setEid] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    useEffect(() => {
        fetch("/AdministratorHome").then(
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
    return(
        <div>
            <Navbar/>
            <div className="sidebar">
                <h2> Remote Access </h2>
                    <h4><Link to="/administratorModifyUser">Modify User</Link></h4>
                    <h4><Link to="/administratorModifyRequests">Modify Request</Link></h4>
                    <h4><Link to="/administratorSeeHolidays">Modify Holidays</Link></h4>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin! {fname} {lname}</h2>
                <h3>Id #{eid}</h3>
            </div>
            <div className="calendarview">
                <ACalendar/>
            </div>
        </div>

    )
}
 
export default AdministratorHome;

