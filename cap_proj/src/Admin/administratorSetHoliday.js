import Navbar from "./administratorNavbar";
// import HolidayList from "./aHoliday";
import 'react-calendar/dist/Calendar.css'
import {useEffect, useState} from "react";

const administratorSetHoliday = () => {
    const [Hid, setHid] = useState("")
    const [Hname, setHName] = useState("")
    const [Hdate, setHDate] = useState("")
    useEffect(() => {
        fetch("/administratorSetHoliday").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setHid(data[i].Hid);
                    setHName(data[i].HName);
                    setHDate(data[i].HDate);

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

                                <input type="date" id="DateSelect" name="HolidayDate"
                                       value="2018-07-22"
                                       min="2018-01-01" max="2018-12-31">
                                </input>
                            </div>
                            <br />
                            <label for="HolidayName">Type Holiday Name </label>
                            <div className="request-text">
                                <textarea name="HName" id="HolidayName" cols="1" rows="1"></textarea>
                            </div>
                            <br />
                            <input type="submit" value="Submit" className="request-button" />

                        </form>
                    </div>
                    <div className="Holidays">
                        <span>Here are all your holidays</span>
                        <table className="holidays-table">
                            <tr>
                                <th> {id} </th>
                                <th> {Hname} </th>
                                <th> {Date}</th>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        );
    }

export default administratorSetHoliday;