import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";

const AdministratorHome = () => {
    const [eid, setEid] = useState("")
    // const [fname, setFname] = useState("")
    // const [lname, setLname] = useState("")
    useEffect(() => {
        fetch("/AdministratorHome").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setEid(data[i].id);
                    // setFname(data[i].firstname);
                    // setLname(data[i].lastname);
                }
            }
        )
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="sidebar">
                {/*<h2>{fname}, {lname}</h2>*/}
                <h2>Modify User</h2>
                <h2>Delete Employee</h2>
                <h2>Set Holidays</h2>
                <h2>See All Request</h2>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin! {eid},</h2>
                    {/*{fname},{lname}</h2>*/}
            </div>
            <div className="calendarview">
                <ACalendar/>
            </div>
        </div>
    );
}
 
export default AdministratorHome;