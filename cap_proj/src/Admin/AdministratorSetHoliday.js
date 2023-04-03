import Navbar from "./administratorNavbar";
import 'react-calendar/dist/Calendar.css'
import {useEffect, useState} from "react";

const AdministratorSetHoliday = () => {
    const [holiday_id, setholiday_id] = useState("")
    const [hname, sethname] = useState("")
    const [hdate, sethdate] = useState("")
    useEffect(() => {
        fetch("/administratorSetHoliday").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setholiday_id(data[i].holiday_id);
                    sethname(data[i].hname);
                    sethdate(data[i].hdate);

                }
            }
        )
    }, [])

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
                    <div className="Holidays">
                        <span>Here are all your holidays</span>
                        <table className="holidays-table">
                            <tr>
                                <th> {holiday_id} </th>
                                <th> {hname} </th>
                                <th> {hdate}</th>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        );
    }

export default AdministratorSetHoliday;