import Navbar from "./eNavbar";
// import { useState } from "react";
// import { UserData } from "./eData";
// import DoughnutChart from "../Components/DoughnutChart";

const EmployeePTO = () => {
    // const [userData, setUserData] = useState({
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
            {/* <br />
            <br />
            <h1 className="header-graph">PTO Balance</h1>
            <div className="donut-graphs">
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
            </div>
            <br />
            <h1 className="header-graph">Upcoming Days Off</h1>
            <div>
            </div>
            <br />
            <h1 className="header-graph">Pending Requests</h1>
            <h1 className="header-graph">Holidays</h1> */}
        </div>
     );
}
 
export default EmployeePTO;