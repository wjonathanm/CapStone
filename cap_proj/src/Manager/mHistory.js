import Navbar from "./mNav";

const mHistory = () => {
    return ( 
        <div>
            <Navbar />
            <h1 className="header-title">Own Request History</h1>
          <br/>
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
                        </tr>
                        <tr>
                            <td>3/20/2023</td>
                            <td>3/20/2023</td>
                            <td>Vacation</td>
                            <td>2/25/2023</td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default mHistory;