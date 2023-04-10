import Navbar from "./mNav";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'

const ManagerRequest = () => {
    
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
    
            fetch('/mRequest', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(request)
            }).then(resp => resp.json())
        }
    return ( 
    <div>
        <Navbar/>
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
                                value="2023-04-10"
                                min="2023-01-01" max="2023-12-31" onChange={(e)=> setSdate(e.target.value)}>
                            </input>
                            <span>   </span>
                            <label for="start">End date:</label>
                            <input type="date" id="start" name="trip-start"
                                value="2023-04-10"
                                min="2023-01-01" max="2023-12-31" onChange={(e)=> setEdate(e.target.value)}>
                            </input>
                        </div>
                        <br />
                        <label for="emp-reason">Reason: </label>
                        <div className="request-text">
                            <textarea name="Reason" id="emp-reason" cols="30" rows="4" maxLength={50} onChange={(e) => setComment(e.target.value)}></textarea>
                            <div >Max Characters: 50</div>
                        </div>
                        <br />
                        <input type="submit" value="Submit" className="request-button" />
                        
                    </form>
            </div>
        </div>
    </div>
    
     );
}
 
export default ManagerRequest;