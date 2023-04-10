import Navbar from "./eNavbar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar'

const Request = () => {
    
    // const [date, setDate] = useState(new Date())
    const [ ptype, setPtype ] = useState("")
    const [ sDate, setSdate ] = useState("")
    const [ eDate, setEdate ] = useState("")
    const [ comment, setComment ] = useState("")
    console.log(ptype)
    console.log(sDate)
    console.log(eDate)
    console.log(comment)
    const handleRequest = (e) => {
        e.preventDefault();
        const request = { ptype, sDate, eDate, comment};

        fetch('/eRequest', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(request)
        }).then(resp => resp.json())
    }
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
                    <form onSubmit={handleRequest}>
                        {/* <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <br /> */}
                        <br />
                        <span>PTO Type:</span>
                        <span className="custom-select">
                            <select onChange={(e) => setPtype(e.target.value)}>
                                {/*<option value="Vacation">Vacation</option>*/}
                                {/*<option value="Sick">Sick</option>*/}
                                {/*<option value="Personal">Personal</option>*/}
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
                                value="2023-07-22"
                                min="2023-01-01" max="2023-12-31" onChange={(e)=> setSdate(e.target.value)}>
                            </input>
                            <label for="start">End date:</label>
                            <input type="date" id="start" name="trip-start"
                                value="2023-07-22"
                                min="2023-01-01" max="2023-12-31" onChange={(e)=> setEdate(e.target.value)}>
                            </input>
                        </div>
                        <br />
                        <label for="emp-reason">Reason: </label>
                        <div className="request-text">
                            <textarea name="Reason" id="emp-reason" cols="30" rows="4" onChange={(e) => setComment(e.target.value)}></textarea>
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