import Navbar from "./mNav";


const managerHome = () => {
    return ( 
        <div>
            <Navbar />
            <br />
            {/* <br /> */}
            <div className="grid-epto-container">
                <h1 className="emp-header">PTO Balance</h1>
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
                    <h1>Upcoming Days Off</h1>
                    <div className="days-off">
                        <div className="days-off-contents">Start Date</div>
                        <div className="days-off-contents">End Date</div>
                        <div className="days-off-contents">Type</div>
                    </div>
                    <div className="days-off">
                        <div className="days-off-contents">2/24/2023</div>
                        <div className="days-off-contents">2/25/2023</div>
                        <div className="days-off-contents">Sick</div>
                    </div>
                    {/* <div className="days-off">
                        <div className="days-off-contents">2/29/2023</div>
                        <div className="days-off-contents">2/30/2023</div>
                        <div className="days-off-contents">Vacation</div>
                    </div> */}
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
                        <div className="holidays">Christmas</div>
                        <div className="holidays">12/15/2023</div>
                    </div>
                    <div className="holiday-table">
                        <br/>
                        <div className="holidays">Holdiay Name</div>
                        <div className="holidays">Holdiay Date</div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default managerHome;