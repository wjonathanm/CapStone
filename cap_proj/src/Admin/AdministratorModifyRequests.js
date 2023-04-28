import Navbar from "./administratorNavbar";
import {useEffect, useState} from "react";
import Arequests from "./aShowRequest";

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
            <Arequests requests={requests} />
        </div>
            </div>
        </div>
    )};
export default AdministratorModifyRequests;