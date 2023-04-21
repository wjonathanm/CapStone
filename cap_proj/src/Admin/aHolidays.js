const Holidays = ({holidays}) => {
    return (
        <div className="Holidays">
            <table className="holidays-table-header">
                <thead>
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Date </th>
                </tr>
                </thead>
            </table>

            <div className="employee-table-body-wrapper">
                <table className="employee-table-body">
                    <tbody>
                {holidays.map(holiday => (
                    <tr key={holiday.holiday_id}>
                        <td>{holiday.holiday_id}</td>
                        <td>{holiday.holiday_name}</td>
                        <td>{holiday.holiday_date.slice(0, 10)}</td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>

    );
}
export default Holidays;