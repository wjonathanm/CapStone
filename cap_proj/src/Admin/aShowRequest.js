import React, {useState} from "react";

const AREQUESTS = ({ requests }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredRequests = requests.filter((requests) => {
        const values = Object.values(requests);
        const lowerCasedValues = values.map((value) =>
            typeof value === 'string' ? value.toLowerCase() : value.toString()
        );
        return lowerCasedValues.some((value) => value.includes(searchTerm.toLowerCase()));
    });
    return (
        <div className="Requests">
            <div className="searchbar">
                <input type="text" placeholder="Type Any Value to Search" value={searchTerm} onChange={handleSearchChange} />
            </div>
            <table className="requests-table-header">
                <tr>
                <thead>

                    <th>Date Requested</th>
                    <th>Request #</th>
                    <th>Employee ID </th>
                    <th>Leader ID </th>
                    <th>PTO Type </th>
                    <th>Reasons </th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </thead>
                </tr>
            </table>

            <div className="requests-table-body-wrapper">
                <table className="requests-table-body">
                    <tbody>
                    {filteredRequests.map((requests) => (
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