import Navbar from "./administratorNavbar";
import {useEffect, useState} from "react";
import SHolidays from "./aHolidaysSearch";

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
        < SHolidays holidays={holidays} />
    </div>
        </div>
    </div>

)};
export default AdministratorHolidays;