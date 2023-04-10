import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";

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
                <h2> {fname} {lname} </h2>
                <h2>Account Modification</h2>
                <h2>Request Modification</h2>
                <h2>Hiring..</h2>
                <h2>See Holidays</h2>
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

