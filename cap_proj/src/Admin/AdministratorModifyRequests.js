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
                    <h3>Modify Requests Page</h3>
                </div>
        <div className="RequestsMOD">
            <AREQUESTS requests={requests} />
        </div>
            </div>
        </div>
    )};
export default AdministratorModifyRequests;