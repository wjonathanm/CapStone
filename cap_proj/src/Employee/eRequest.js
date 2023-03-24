import Navbar from "./eNavbar";
// import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar'

const Request = () => {
    
    // const [date, setDate] = useState(new Date())



    return ( 
        <div className="eRequest">
            <Navbar />
            <br />
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="request-grid">
                <div className="request-form">
                    <h1>Request Form</h1>
                    <form>
                        {/* <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <br /> */}
                        <br />
                        <span>PTO Type:</span>
                        <span className="custom-select">
                            <select>
                                <option value="Vacation">Vacation</option>
                                <option value="Sick">Sick</option>
                                <option value="Personal">Personal</option>
                            </select>
                        </span>
                        <br />
                        <br />
                        {/* <div style={{display:"inline-block"}}>
                            <Calendar onChange={setDate} value={date} selectRange={true} />
                        </div>
                        {date.length > 0 ? (
                        <p>
                            <span>Start:</span>{' '} {date[0].toDateString()}
                            &nbsp; to &nbsp;
                            <span>End:</span> {date[1].toDateString()}
                        </p>
                                ) : (
                        <p>
                            <span>Default selected date:</span>{' '} {date.toDateString()}
                        </p>
                                )}
                        <br /> */}
                        <div className="request-calendar">
                            <label for="start">Start date:</label>

                            <input type="date" id="start" name="trip-start"
                                value="2018-07-22"
                                min="2018-01-01" max="2018-12-31">
                            </input>
                            <label for="start">End date:</label>
                            <input type="date" id="start" name="trip-start"
                                value="2018-07-22"
                                min="2018-01-01" max="2018-12-31">
                            </input>
                        </div>
                        <br />
                        <label for="emp-reason">Reason: </label>
                        <div className="request-text">
                            <textarea name="Reason" id="emp-reason" cols="30" rows="4"></textarea>
                        </div>
                        <br />
                        <input type="submit" value="Submit" className="request-button" />
                        
                    </form>
                </div>
                <div className="request-form">
                    <span>Refreshes in 0 Days</span>
                    <table className="request-table">
                        <tr>
                            <th> PTO </th>
                            <th> Available </th>
                            <th> Used </th>
                            <th> Requested </th>
                        </tr>
                        <tr>
                        <td>Vacation</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Sick</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Personal</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
     );
}
 
export default Request;