import Navbar from "./administratorNavbar";
import 'react-calendar/dist/Calendar.css'
import {useEffect, useState} from "react";
import Employees from "./aEmployees";

const AdministratorCUser = () => {
    const [employees, set_Employees] = useState([])
    useEffect(() => {
        fetch("/administratorCUser")
            .then(response => response.json())
            .then(data => set_Employees(data));
    }, []);

    return (



    <div className="EmployeesShow">
        <Navbar />
        <br />
        <br />
        <h1>Employees</h1>
        <Employees employees={employees} />
    </div>
    );
}

export default AdministratorCUser;