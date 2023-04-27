import Navbar from "./administratorNavbar";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import Holidays from "./aHolidays";

const AdministratorSetHoliday = () => {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch("/administratorSetHoliday")
            .then(response => response.json())
            .then(data => setHolidays(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const holiday_name = formData.get('holiday_name');
        const holiday_date = formData.get('holiday_date');
        fetch('/administratorSetHoliday', {
            method: 'POST',
            body: JSON.stringify({ holiday_name, holiday_date }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setHolidays(prevHolidays => [...prevHolidays, data]);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="HolidaySet">
            <div className="Page Holder">
                <Navbar/>
                <div className="adminwelcome">
                    <h3>Holiday Page</h3>
                </div>
            <br />
            <div className="HolidayContainer">
                <div className="container1">
                    <h1>Set Holiday</h1>
                    <div className="holiday-form">

                        <form onSubmit={handleSubmit}>
                            <br />
                            <div className="hset-calendar">
                                <label htmlFor="DateSelect">Select date  </label>
                                <input type="date" id="DateSelect" name="holiday_date" required />
                            </div>
                            <br />
                            <label htmlFor="HolidayName">Type Holiday Name </label>
                            <div className="request-text">
                                <textarea name="holiday_name" id="HolidayName" cols="20" rows="1" required></textarea>
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
        </div>
    );
};

export default AdministratorSetHoliday;