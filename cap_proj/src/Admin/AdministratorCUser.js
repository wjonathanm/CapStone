import Navbar from "./administratorNavbar";
import 'react-calendar/dist/Calendar.css'
import {useEffect, useState} from "react";

const AdministratorCUser = () => {
    const [holiday_id, setHoliday_id] = useState("")
    const [hname, setHname] = useState("")
    const [hdate, setHdate] = useState("")
    useEffect(() => {
        fetch("/administratorCUser").then(
            response => response.json()
        ).then(
            data => {
                JSON.stringify(data)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    setHoliday_id(data[i].holiday_id);
                    setHname(data[i].hname);
                    setHdate(data[i].hdate);

                }
            }
        )
    }, [])
    return (
        <div className="Holidays">
            <Navbar/>
            <br />
        <span>Here are all your holidays</span>
        <table className="holidays-table">
            <tr>
                <th> {holiday_id} </th>
                <th> {hname} </th>
                <th> {hdate}</th>
            </tr>
        </table>
    </div>


    );
}

export default AdministratorCUser;