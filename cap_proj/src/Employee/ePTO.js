import Navbar from "./eNavbar";
// import '../index.css'
import {useEffect, useState} from "react";
// import { UserData } from "./eData";
// import DoughnutChart from "../Components/DoughnutChart";


const EmployeePTO = () => {
    const [sick, setSick] = useState("")
    const [personal, setPersonal] = useState("")
    const [vacation, setVacation] = useState("")
    // const [holidayname,setHolidayname]=useState("")
    // const [holidaydate,setHolidaydate]=useState("")
    const[holiday, setHolidays] = useState("")
    // useEffect(() => {
    //     fetch("/ePTO")
    //         .then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             JSON.stringify(data)
    //             console.log(data)
    //             for (let i = 0; i < data.length; i++) {
    //                 setSick(data[i].ptobalancesick);
    //                 setPersonal(data[i].ptobalancepersonal);
    //                 setVacation(data[i].ptobalancevacation);
    //                 // setHolidayname(data[i].holidayname);
    //                 // setHolidaydate(data[i].holidaydate);
    //
    //             }
    //         }
    //     )
    // }, [])
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
    for (let i in holiday){
        holidayList.push(
            <tr key={i}>
                <td>{holiday[i].holiday_name}</td>
                <td>{holiday[i].holiday_date.slice(0,10)}</td>
            </tr>
        )
    }
    // const total=personal+sick+
    // const [backEndData, setbackEndData] = useState('');
    // useEffect(() => {
    //     fetch("/login" )
    //         .then((res) =>{
    //             return res.json();
    //         }).then((resp) =>{
    //         setbackEndData(resp);
    //         // console.log(backEndData)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // },[])
    // console.log(backEndData);
    // const [ userData, setUserData ] = useState({
    //     labels: UserData.map((data) => data.year),
    //     datasets: [
    //       {
    //         label: "Users Gained",
    //         data: UserData.map((data) => data.userGain),
    //         backgroundColor: [
    //           "rgba(75,192,192,1)",
    //           "#ecf0f1",
    //           "#50AF95",
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2,
    //       },
    //     ],
    //   });
    return ( 
        <div>
            <Navbar />
            <br />
            {/* <br /> */}
            <h1 className="header-title">PTO Tracker Homepage</h1>
            <br />
            <div className="grid-epto-container">
                <div className="emp-balance-header">
                    <h1 >PTO Balance</h1>
                    <span>Refreshes in 213 Days</span>
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
                            <td>2</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Sick</td>
                            <td>{sick}</td>
                            <td>5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Personal</td>
                            <td>{personal}</td>
                            <td>3</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{personal+sick+vacation}</td>
                            <td>10</td>
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
                    <div className="days-off" style={{fontWeight:"bold"}}>
                        <div className="days-off-contents">Start Date</div>
                        <div className="days-off-contents">End Date</div>
                        <div className="days-off-contents">Type</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">4/24/2023</div>
                        <div className="days-off-contents">4/25/2023</div>
                        <div className="days-off-contents">Sick</div>
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
                        {/*<div className="holidays"></div>*/}
                        {/*<div className="holidays"></div>*/}
                        {/*<table className="holidays-table-header">*/}
                        {/*    <thead>*/}
                        {/*    <tr>*/}
                        {/*        <th> Id </th>*/}
                        {/*        <th> Name </th>*/}
                        {/*        <th> Date </th>*/}
                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*</table>*/}

                        {/*<div className="employee-table-body-wrapper">*/}
                        {/*    <table className="employee-table-body">*/}
                        {/*        <tbody>*/}
                        {/*        {holidays.map(holiday => (*/}
                        {/*            <tr key={holiday.holiday_id}>*/}
                        {/*                <td>{holiday.holiday_id}</td>*/}
                        {/*                <td>{holiday.holiday_name}</td>*/}
                        {/*                <td>{holiday.holiday_date.slice(0, 10)}</td>*/}
                        {/*            </tr>*/}
                        {/*        ))}*/}
                        {/*        </tbody>*/}
                        {/*    </table>*/}
                        {/*</div>*/}
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
export default EmployeePTO;