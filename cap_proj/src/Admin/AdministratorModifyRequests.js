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
        <div className="ModifyRequests">
            <div className="Page Holder">
                <Navbar/>
                <div className="adminwelcome">
                    <h3>Modify Users Page</h3>
                </div>
        <div className="RequestsMOD">
            <br />
            <br />
            <h1>Requests</h1>
            <AREQUESTS requests={requests} />
        </div>
            </div>
        </div>
    )};
export default AdministratorModifyRequests;