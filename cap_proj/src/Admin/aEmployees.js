const Employees = ({employees}) => {
    return (
        <div className="Employees">
            <table className="employee-table">
                <thead>
                <tr>
                    <th> ID </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default Employees;