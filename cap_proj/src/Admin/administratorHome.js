import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import {useEffect, useState} from "react";

const administratorHome = () => {
    const [eid, setEid] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [hiredate, setHireDate] = useState("")
    const [lid, setLid] = useState("")
    const [role, setRole] = useState("")
    const [sick, setSick] = useState("")
    const [personal, setPersonal] = useState("")
    const [vacation, setVacation] = useState("")
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
        <>
            <Navbar/>
            <div className="sidebar">
                <h2>{fname}</h2>
                <h2>Modify User</h2>
                <h2>Delete Employee</h2>
                <h2>Set Holidays</h2>
                <h2>See All Request</h2>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin!</h2>
            </div>
            <div className="calendarview">
            <ACalendar/>
            </div>
        </>

     );
}
 
export default administratorHome;