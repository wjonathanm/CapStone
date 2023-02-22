import { Link } from 'react-router-dom';

const HolidayList = ({ holidays }) => {
    return (
        <div className="holiday-list">
            {holidays.map(holiday => (
                <div className="holiday-preview" key={holiday.id} >
                    <Link to={`/holidays/${holiday.id}`}>
                        <h2>{holiday.id}</h2>
                        <p>Holiday: {holiday.title}</p>
                        <p>Date {holiday.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default HolidayList;