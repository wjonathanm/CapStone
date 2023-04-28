import React, { useState } from "react";

const Arequests = ({ requests, updateRequest, deleteRequest }) => {
    const [selectedRequestId, setSelectedRequestId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [leaderId, setLeaderId] = useState("");
    const [ptype, setPtype] = useState("");
    const [reasons, setReasons] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleLeaderIdChange = (e) => {
        setLeaderId(e.target.value);
    };

    const handlePtypeChange = (e) => {
        setPtype(e.target.value);
    };

    const handleReasonsChange = (e) => {
        setReasons(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleUpdateClick = () => {
        if (selectedRequestId !== null) {
            const updatedRequest = {
                employee_id: employeeId,
                leader_id: leaderId,
                ptype: ptype,
                reasons: reasons,
                start_date: startDate,
                end_date: endDate
            };
            updateRequest(selectedRequestId, updatedRequest);
            setSelectedRequestId(null);
        }
    };


    const handleDeleteClick = () => {
        if (selectedRequestId !== null) {
            deleteRequest(selectedRequestId);
            setSelectedRequestId(null);
        }
    };

    const filteredRequests = requests.filter((request) => {
        const values = Object.values(request);
        const lowerCasedValues = values.map((value) =>
            typeof value === "string" ? value.toLowerCase() : value.toString()
        );
        return lowerCasedValues.some((value) =>
            value.includes(searchTerm.toLowerCase())
        );
    }).filter((request) => request.request_id !== selectedRequestId);

    return (
        <div className="Requests">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Type Any Value to Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <table className="requests-table-header">
                <thead key="header">
                <tr>
                    <th>Date Requested</th>
                    <th>Request #</th>
                    <th>Employee ID </th>
                    <th>Leader ID </th>
                    <th>PTO Type </th>
                    <th>Reasons </th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
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
                            <td><button onClick={() => setSelectedRequestId(requests.request_id)}>Edit</button></td>
                            <button onClick={() => handleDeleteClick(requests.request_id)}>Delete</button>

                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            {selectedRequestId !== null && (
                <div>
                    <h2>Edit Request</h2>
                    <form>
                        <label>
                            Employee ID:
                            <input type="text"  value={employeeId} onChange={handleEmployeeIdChange} />
                        </label>
                        <label>
                            Leader ID:
                            <input type="text" value={leaderId} onChange={handleLeaderIdChange} />
                        </label>
                        <label>
                            PTO Type:
                            <input type="text" value={ptype} onChange={handlePtypeChange} />
                        </label>
                        <label>
                            Reasons:
                            <input type="text" value={reasons} onChange={handleReasonsChange} />
                        </label>
                        <label>
                            Start Date:
                            <input type="date" value={startDate} onChange={handleStartDateChange} />
                        </label>
                        <label>
                            End Date:
                            <input type="date" value={endDate} onChange={handleEndDateChange} />
                        </label>
                        <button onClick={handleUpdateClick}>Save</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Arequests;