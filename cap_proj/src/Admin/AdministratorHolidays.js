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
    <div className="HolidaysShow">
        <Navbar />
        <br />
        <br />
        <h1>Holidays</h1>
        <Holidays holidays={holidays} />
    </div>

)};
export default AdministratorHolidays;