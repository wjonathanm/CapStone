import Navbar from "./administratorNavbar";
import Employees from "./aEmployees";
import {useEffect, useState} from "react";

const AdministratorModifyUser = () => {const [employees, set_Employees] = useState([])
    useEffect(() => {
        fetch("/administratorCUser")
            .then(response => response.json())
            .then(data => set_Employees(data));
    }, []);

    return(
        <div className="Employeesmod">
            <Navbar />
            <br />
            <br />
            <h1>Employees</h1>
            <Employees employees={employees} />
        </div>
    )};
export default AdministratorModifyUser;