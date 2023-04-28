import Navbar from "./eNavbar";
import {useEffect, useState} from "react";

const Ehistory = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        fetch("/eHistory").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                setRequests(data)
            }
        )
    }, [])
    const logs = [];
    for (let i in requests){
        logs.push(
            <tr key={i}>
                <td>{requests[i].start_date.slice(0, 10)}</td>
                <td>{requests[i].end_date.slice(0, 10)}</td>
                <td>{requests[i].ptype}</td>
                <td>{requests[i].request_date.slice(0, 10)}</td>
                <td>{requests[i].status}</td>
            </tr>
        )
    }
    return ( 
        <div>
            <Navbar />
            <div>
                <div className="emp-header">
                    <h1>History</h1>
                    <br></br>
                    <table border="2">
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>PTO Type</th>
                                <th>Request Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
export default Ehistory;