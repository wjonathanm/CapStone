const AREQUESTS = ({ requests }) => {
    return (
        <div className="Requests">
            <table className="requests-table-header">
                <thead>
                <tr>
                    <th>Request #</th>
                    <th>Employee ID </th>
                    <th>PTO Type </th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                </thead>
            </table>

            <div className="employee-table-body-wrapper">
                <table className="employee-table-body">
                    <tbody>
                    {requests.map(requests => (
                        <tr key={requests.requests_id}>
                            <td>{requests.requests_id}</td>
                            <td>{requests.employee_id}</td>
                            <td>{requests.ptype}</td>
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