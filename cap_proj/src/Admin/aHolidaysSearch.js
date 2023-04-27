import React, { useState } from 'react';
const SHolidays = ({ holidays }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredHolidays = holidays.filter((holidays) => {
        const values = Object.values(holidays);
        const lowerCasedValues = values.map((value) =>
            typeof value === 'string' ? value.toLowerCase() : value.toString()
        );
        return lowerCasedValues.some((value) => value.includes(searchTerm.toLowerCase()));
    });
    return (
        <div className="Holidays">
            <div className="searchbar">
                <input type="text" placeholder="Type Any Value to Search" value={searchTerm} onChange={handleSearchChange} />
            </div>
            <table className="holidays-table-header">
                <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Date </th>
                </tr>
                </thead>
            </table>

            <div className="holidays-table-body-wrapper">
                <table className="holidays-table-body">
                    <tbody>
                    {filteredHolidays.map((holidays) => (
                        <tr key={holidays.holiday_id}>
                            <td>{holidays.holiday_id}</td>
                            <td>{holidays.holiday_name}</td>
                            <td>{holidays.holiday_date.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SHolidays;