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
        <div className="ModifyUser">
            <div className="Page Holder">
                <Navbar/>
                <div className="adminwelcome">
                    <h3>Modify User Page</h3>
                </div>
        <div className="Employeesmod">
            <Employees employees={employees} />
        </div>
            </div>
        </div>
    )};
export default AdministratorModifyUser;