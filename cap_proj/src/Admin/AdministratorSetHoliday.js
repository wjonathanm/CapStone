import Navbar from "./administratorNavbar";
import 'react-calendar/dist/Calendar.css'
import {useEffect, useState} from "react";
import Holidays from "./aHolidays";


const AdministratorSetHoliday = () => {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch("/administratorSetHoliday")
            .then(response => response.json())
            .then(data => setHolidays(data));
    }, []);

    return (
            <div className="HolidaySet">
                <Navbar />
                <br />
                <div className="HolidayContainer">
                <div className="container1">
                    <div className="holiday-form">
                        <h1>Set Holiday</h1>
                        <form>
                            <br />
                            <div className="hset-calendar">
                                <label for="DateSelect">Select date:</label>

                                <input type="date" id="DateSelect" name="hdate"
                                       value="YYYY-MM-DD"
                                       min="2023-MM-DD" max="2023-MM-DD">
                                </input>
                            </div>
                            <br />
                            <label for="HolidayName">Type Holiday Name </label>
                            <div className="request-text">
                                <textarea name="hname" id="holiday_id" cols="1" rows="1"></textarea>
                            </div>
                            <br />
                            <input type="submit" value="Submit" className="request-button" />
                        </form>
                    </div>
                </div>
                <div className="container2">
                    <h1>Holidays</h1>
                <Holidays holidays={holidays} />
                </div>
            </div>
            </div>

        );
    }

export default AdministratorSetHoliday;