import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";

const AdministratorHome = () => {
    const [id, setId] = useState("")
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    useEffect(() => {
        fetch("/ePTO").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setId(data[i].id);
                    setfirstName(data[i].firstname);
                    setlastName(data[i].lastname);

                }
            }
        )
    }, [])
    return(
        <div>
            <Navbar/>
            <div className="sidebar">
                <h2>{firstname}, {lastname}</h2>
                <h2>Modify User</h2>
                <h2>Delete Employee</h2>
                <h2>Set Holidays</h2>
                <h2>See All Request</h2>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin! {firstname} {lastname}</h2>
            </div>
            <div className="calendarview">
                <ACalendar/>
            </div>
        </div>
    )
}
export default AdministratorHome;
