const AREQUESTS = ({ requests }) => {
    return (
        <div className="Requests">
            <table className="requests-table-header">
                <thead>
                <tr>
                    <th>Date Requested</th>
                    <th>Request #</th>
                    <th>Employee ID </th>
                    <th>Leader ID </th>
                    <th>PTO Type </th>
                    <th>Reasons </th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                </thead>
            </table>

            <div className="employee-table-body-wrapper">
                <table className="employee-table-body">
                    <tbody>
                    {requests.map(requests => (
                        <tr key={requests.request_id}>
                            <td>{requests.request_date.slice(0, 10)}</td>
                            <td>{requests.request_id}</td>
                            <td>{requests.employee_id}</td>
                            <td>{requests.leader_id}</td>
                            <td>{requests.ptype}</td>
                            <td>{requests.reasons}</td>
                            <td>{requests.start_date.slice(0, 10)}</td>
                            <td>{requests.end_date.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AREQUESTS;