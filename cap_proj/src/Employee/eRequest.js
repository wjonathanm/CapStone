import Navbar from "./eNavbar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar'
import Popup from "../Components/Popup";

const Request = () => {
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; //January is 0!
    // var yyyy = today.getFullYear();

    // if (dd < 10) {
    // dd = '0' + dd;
    // }

    // if (mm < 10) {
    // mm = '0' + mm;
    // } 
        
    // today = yyyy + '-' + mm + '-' + dd;
    // document.getElementById("datefield").setAttribute("max", today);
    const options = [
        {
          label: "Select",
          value: "",
        },
        {
          label: "Vacation",
          value: "Vacation",
        },
        {
          label: "Sick",
          value: "Sick",
        },
        {
          label: "Personal",
          value: "Personal",
        },
      ];
    const [buttonPopup, setButtonPopup]=useState(false)
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
            <h1 className="header-title">Make a Request</h1>
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
                        <span>PTO Type &nbsp;</span>
                        <span className="custom-select">
                            <select onChange={(e) => setPtype(e.target.value)} required>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                                {/* <option value="Vacation">Vacation</option>
                                <option value="Sick">Sick</option>
                                <option value="Personal">Personal</option> */}
                            </select>
                        </span>
                        <br />
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <h3>Request Submitted</h3>
                            {/* <p></p> */}
                        </Popup>
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
                            <label for="start">Start Date &nbsp;</label>

                            <input type="date" id="start" name="pto-start" required
                                // value="2023-04-10"
                                min="2023-04-28" max="2023-12-31" onChange={(e)=> setSdate(e.target.value)}>
                            </input>
                            <br></br>
                            <br />
                            <span>   </span>
                            <label for="finish">End Date &nbsp;</label>
                            <input type="date" id="finish" name="pto-end" required
                                // value="2023-04-10"
                            // <input type="date" id="start" name="trip-start"
                            //     value="2023-07-22"
                            //     min="2023-01-01" max="2023-12-31" onChange={(e)=> setSdate(e.target.value)}>
                            // </input>
                            // <span>   </span>
                            // <label for="start">End date:</label>
                            // <input type="date" id="start" name="trip-start"
                            //     value="2023-07-22"
                                min="2023-04-28" max="2023-12-31" onChange={(e)=> setEdate(e.target.value)}>
                            </input>
                        </div>
                        <br />
                        <label for="emp-reason">Reason </label>
                        <div className="request-text">
                            <textarea name="Reason" id="emp-reason" cols="30" rows="4" maxLength={50} onChange={(e) => setComment(e.target.value)}></textarea>
                            <div >Max Characters: 50</div>
                        </div>
                        <br />
                        <input type="submit" value="Submit" className="request-button" onClick={()=>setButtonPopup(true)} />
                        
                    </form>
                </div>
                <div className="request-form">
                    <table className="request-table">
                        <tr>
                            <th> PTO </th>
                            <th> Available </th>
                            <th> Used </th>
                            <th> Requested </th>
                        </tr>
                        <tr>
                        <td>Vacation</td>
                            <td>16</td>
                            <td>2</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Sick</td>
                            <td>7</td>
                            <td>5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Personal</td>
                            <td>0</td>
                            <td>3</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
     );
}
 
export default Request;