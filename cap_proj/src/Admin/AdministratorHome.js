import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AdministratorHome = () => {
    /***HI**/
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
            <div className="Page Holder">
            <Navbar/>
            <div className="adminwelcome">
                <h3>HOMEPAGE</h3>
            </div>
            <div className="sidebar">
                <h2> Remote Access </h2>
                    <h4><Link to="/administratorModifyUser">Modify User</Link></h4>
                    <h4><Link to="/administratorModifyRequests">Modify Request</Link></h4>
                    <h4><Link to="/administratorSeeHolidays">Modify Holidays</Link></h4>
            </div>

            <div className="calendarview">
                <ACalendar/>
            </div>
        </div>
        </div>
    )
}
 
export default AdministratorHome;

