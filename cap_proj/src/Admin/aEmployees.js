import React, { useState } from 'react';

const Employees = ({ employees }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEmployees = employees.filter((employee) => {
        const values = Object.values(employee);
        const lowerCasedValues = values.map((value) =>
            typeof value === 'string' ? value.toLowerCase() : value.toString()
        );
        return lowerCasedValues.some((value) => value.includes(searchTerm.toLowerCase()));
    });

    return (
        <div className="Employees6">
            <div className="searchbar">
            <input type="text" placeholder="Type Any Value to Search" value={searchTerm} onChange={handleSearchChange} />
            </div>
            <table className="employee-table-header">
                <tr>
                <thead>

                    <th>ID</th>
                    <th>Role</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Hiredate</th>
                    <th>Manager id</th>

                </thead>
            </tr>
            </table>

            <div className="employee-table-body-wrapper">
                <table className="employee-table-body">
                    <tbody>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.role}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.hiredate.slice(0, 10)}</td>
                            <td>{employee.leaderid}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;