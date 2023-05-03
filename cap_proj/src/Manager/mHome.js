// import Holidays from "../Admin/aHolidays";
import Navbar from "./mNav";
import { useState } from "react";
import { useEffect } from "react";

const ManagerHome = () => {
    const [holidays, setHolidays] = useState ("");
    const [sick, setSick] = useState("")
    const [personal, setPersonal] = useState("")
    const [vacation, setVacation] = useState("")

    useEffect(() => {
        Promise.all([
            fetch("/ePTO"),
            fetch("/administratorSetHoliday"),
        ]).then(([resPto, resHoliday]) =>
            Promise.all([resPto.json(), resHoliday.json()])
        ).then(([dataPto, dataholiday]) => {
            JSON.stringify(dataPto)
            console.log(dataPto)
            for (let i = 0; i < dataPto.length; i++){
                setSick(dataPto[i].ptobalancesick)
                setPersonal(dataPto[i].ptobalancepersonal);
                setVacation(dataPto[i].ptobalancevacation);
            }
            setHolidays(dataholiday)
        })
    }, [])
    const holidayList = [];
    for (let i in holidays){
        holidayList.push(
            <tr key={i}>
                <td>{holidays[i].holiday_name}</td>
                <td>{holidays[i].holiday_date.slice(0,10)}</td>
            </tr>
        )
    }
    // useEffect(() => {
    //     fetch("/administratorSetHoliday")
    //         .then(response => response.json())
    //         .then(data => setHolidays(data));
    // }, []);
    // useEffect(() => {
    //     fetch("/ePTO").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             JSON.stringify(data)
    //             console.log(data)
    //             for (let i = 0; i < data.length; i++) {
    //                 setEid(data[i].id);
    //                 setEmail(data[i].email);
    //                 setFname(data[i].firstname);
    //                 setLname(data[i].lastname);
    //                 setLid(data[i].leaderid);
    //                 setRole(data[i].role);
    //                 setSick(data[i].ptobalancesick);
    //                 setPersonal(data[i].ptobalancepersonal);
    //                 setVacation(data[i].ptobalancevacation);
    //                 setHireDate(data[i].hiredate);
    //                 // setHolidayname(data[i].holidayname);
    //                 // setHolidaydate(data[i].holidaydate);
    //
    //             }
    //         }
    //     )
    // }, [])

    return ( 
        <div>
            <Navbar />
            <h1 className="header-title">PTO Tracker</h1>
          <br/>
            <br />
            {/* <br /> */}
            <div className="grid-epto-container">
                <div className="emp-balance-header">
                    <h1 >PTO Balance</h1>
                    <span>Refreshes in 0 Days</span>
                    <table className="request-table">
                        <tr>
                            <th> PTO </th>
                            <th> Available </th>
                            <th> Used </th>
                            <th> Requested </th>
                        </tr>
                        <tr>
                        <td>Vacation</td>
                            <td>{vacation}</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Sick</td>
                            <td>{sick}</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Personal</td>
                            <td>{personal}</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{personal+sick+vacation}</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
                {/* <div className="donut-graphs">
                    <div style={{ width: 200 }}>
                        Personal
                        <DoughnutChart chartData={userData} />
                    </div>
                    <div style={{ width: 200 }}>
                        Sick
                        <DoughnutChart chartData={userData} />
                    </div>
                    <div style={{ width: 200 }}>
                        Vacation
                        <DoughnutChart chartData={userData} />
                    </div>
                    <div style={{ width: 200 }}>
                        Total
                        <DoughnutChart chartData={userData} />
                    </div>
                </div> */}
                <div className="emp-header">
                    <h1>Upcoming 30 Days Off</h1>
                    <div className="days-off">
                        <div className="days-off-contents">Start Date</div>
                        <div className="days-off-contents">End Date</div>
                        <div className="days-off-contents">Type</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">4/24/2023</div>
                        <div className="days-off-contents">4/25/2023</div>
                        <div className="days-off-contents">Sick</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">4/26/2023</div>
                        <div className="days-off-contents">4/27/2023</div>
                        <div className="days-off-contents">Personal</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">4/29/2023</div>
                        <div className="days-off-contents">4/30/2023</div>
                        <div className="days-off-contents">Vacation</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">5/01/2023</div>
                        <div className="days-off-contents">5/05/2023</div>
                        <div className="days-off-contents">Vacation</div>
                    </div>
                </div>

                <div className="emp-header">
                    <h1>Pending Requests</h1>
                    <br></br>
                    <table className="e-pending-requests">
                        <tr>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>PTO Type</th>
                            <th>Request Date</th>
                        </tr>
                        <tr>
                            <td>3/20/2023</td>
                            <td>3/20/2023</td>
                            <td>Vacation</td>
                            <td>2/25/2023</td>

                        </tr>
                    </table>
                </div>
                <div className="emp-header">
                    <h1 >Holidays</h1>
                    <div className="holiday-table">
                        <br/>
                        <table>
                            <thead>
                            <tr>
                                <th>Holiday</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {holidayList}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="holiday-table">
                        <br/>
                        <div className="holidays">{holidayname}</div>
                        <div className="holidays">{holidaydate}</div>
                    </div> */}
                </div>
            </div>
        </div>
     );
}
export default ManagerHome;

