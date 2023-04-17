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
                <td>{requests[i].start_date}</td>
                <td>{requests[i].end_date}</td>
                <td>{requests[i].ptype}</td>
                <td>{requests[i].request_date}</td>
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
<<<<<<< Updated upstream
                    <table className="e-pending-requests">
                        <tr>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>PTO Type</th>
                            <th>Request Date</th>
                            <th>Status</th>
                        </tr>
                        {/* for (let i = 0; i < data.length; i++) { */}
                            <tr>
                                <td>{sdate}</td>
                                <td>{edate}</td>
                                <td>{pto}</td>
                                <td>{rdate}</td>
                                <td>Accepted</td>

                            </tr>
                        {/* } */}
=======
                    <table border="2">
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>PTO Type</th>
                                <th>Request Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs}
                        </tbody>
>>>>>>> Stashed changes
                    </table>
                </div>
            </div>
        </div>
     );
}
export default Ehistory;