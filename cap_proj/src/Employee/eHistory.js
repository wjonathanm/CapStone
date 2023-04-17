import Navbar from "./eNavbar";
import {useEffect, useState} from "react";

const Ehistory = () => {
    //employee_id,leader_id,ptype,reasons,start_date,end_date
    const [eid, seteid] = useState("");
    const [lid, setlid] = useState("");
    const [pto, setpto] = useState("");
    const [reasons, setreasons] = useState("");
    const [sdate, setsdate] = useState("");
    const [edate, setedate] = useState("");
    const [rdate, setrdate] = useState("");

    useEffect(() => {
        fetch("/eHistory").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    seteid(data[i].employee_id);
                    setlid(data[i].leader_id);
                    setpto(data[i].ptype);
                    setreasons(data[i].reasons);
                    setsdate(data[i].start_date);
                    setedate(data[i].end_date);
                    setrdate(data[i].request_date)
                }
            }
        )
    }, [])
    return ( 
        <div>
            <Navbar />
            <div>
                <div className="emp-header">
                    <h1>History</h1>
                    <br></br>
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
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default Ehistory;