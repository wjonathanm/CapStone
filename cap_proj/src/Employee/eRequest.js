import Navbar from "./eNavbar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

const Request = () => {
    
    const [date, setDate] = useState(new Date())



    return ( 
        <div className="eRequest">
            <Navbar />
            <br />
            <br />
            <h1>Request Form</h1>
            <br />
            <br />
            <form>
                {/* <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br /> */}
                <br />
                <select>
                    <option value="Vacation">Vacation</option>
                    <option value="Sick">Sick</option>
                    <option value="Personal">Personal</option>
                </select>
                <br />
                <br />
                <div style={{display:"inline-block"}}>
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
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Request;