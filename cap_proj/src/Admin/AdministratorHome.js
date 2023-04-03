import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";
import { useState, useEffect} from "react";
function AdministratorHome(){
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
    return(
        <div>
            <Navbar/>
            <div className="sidebar">
                <h2>{Fname}</h2>
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
        </div>
    )
}
export default AdministratorHome;
