import Navbar from "./administratorNavbar";
import {useEffect, useState} from "react";
import Holidays from "./aHolidays";

const AdministratorHolidays = () => {const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch("/administratorSetHoliday")
            .then(response => response.json())
            .then(data => setHolidays(data));
    }, []);
return(
    <div className="Modify Holidays">
        <div className="Page Holder">
            <Navbar/>
            <div className="adminwelcome">
                <h3>Modify Holidays Page</h3>
            </div>
    <div className="HolidaysShow">
        <br />
        <br />
        <h1>Holidays</h1>
        <Holidays holidays={holidays} />
    </div>
        </div>
    </div>

)};
export default AdministratorHolidays;