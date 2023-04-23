import Navbar from "./administratorNavbar";
import {useEffect, useState} from "react";
import AREQUESTS from "./aShowRequest";

const AdministratorModifyRequests = () => {
    const [requests, set_Requests] = useState([])
    useEffect(() => {
        fetch("/administratorModifyRequests")
            .then(response => response.json())
            .then(data => set_Requests(data));
    }, []);

    return(
        <div className="RequestsMOD">
            <Navbar />
            <br />
            <br />
            <h1>Requests</h1>
            <AREQUESTS requests={requests} />
        </div>
    )};
export default AdministratorModifyRequests;