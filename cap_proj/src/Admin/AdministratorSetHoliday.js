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
                <br />
                <div className="hset-grid">
                    <div className="holiday-form">
                        <h1>Set Holiday</h1>
                        <form>
                            <br />
                            <div className="hset-calendar">
                                <label for="DateSelect">Select date:</label>

                                <input type="date" id="DateSelect" name="hdate"
                                       value="2018-07-22"
                                       min="2018-01-01" max="2018-12-31">
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
                <Holidays holidays={holidays} />
                </div>
                </div>

        );
    }

export default AdministratorSetHoliday;