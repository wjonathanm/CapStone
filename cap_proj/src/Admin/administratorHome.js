import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";

const administratorHome = () => {
    const [id, setId] = useState("")
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    useEffect(() => {
        fetch("/administratorHome").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setId(data[i].id);
                    setfirstName(data[i].FirstName);
                    setlastName(data[i].LastName);

                }
            }
        )
    }, [])
    return ( 
        <>
            <Navbar/>
            <div className="sidebar">
                <h2>{firstname}, {lastname}</h2>
                <h2>Modify User</h2>
                <h2>Delete Employee</h2>
                <h2>Set Holidays</h2>
                <h2>See All Request</h2>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin! {id},{firstname},{lastname}</h2>
            </div>
            <div className="calendarview">
            <ACalendar/>
            </div>
        </>

     );
}
 
export default administratorHome;