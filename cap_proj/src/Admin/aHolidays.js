const Holidays = ({holidays}) => {
    return (
        <div className="Holidays">
            <span>Here are all your holidays</span>
            <table className="holidays-table">
                <thead>
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Date </th>
                </tr>
                </thead>
                <tbody>
                {holidays.map(holiday => (
                    <tr key={holiday.holiday_id}>
                        <td>{holiday.holiday_id}</td>
                        <td>{holiday.hname}</td>
                        <td>{holiday.hdate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default Holidays;