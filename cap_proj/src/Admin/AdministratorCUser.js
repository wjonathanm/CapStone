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


        <div className="Cuser">
            <div className="Page Holder">
                <Navbar/>
                <div className="adminwelcome">
                    <h3>Employees Page</h3>
                </div>
    <div className="EmployeesShow">
        <Employees employees={employees} />
    </div>
            </div>
        </div>
    );
}

export default AdministratorCUser;