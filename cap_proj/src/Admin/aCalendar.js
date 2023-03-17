import React, { useState } from 'react';
import './aCalendar.css'

const ACalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(new Date());

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const prevMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    const nextMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const monthDays = () => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const days = daysInMonth(date.getFullYear(), date.getMonth());
        let monthDays = [];

        for (let i = 1; i <= firstDay; i++) {
            monthDays.push(<div key={`empty-${i}`} className="day empty"></div>);
        }

        for (let i = 1; i <= days; i++) {
            const day = new Date(date.getFullYear(), date.getMonth(), i);
            const isSelected = selectedDate && selectedDate.toDateString() === day.toDateString();

            monthDays.push(
                <div
                    key={`day-${i}`}
                    className={`day ${day.getDay() === 0 || day.getDay() === 6 ? 'weekend' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDate(day)}
                >
                    {i}
                </div>
            );
        }

        return monthDays;
    };

    return (
        <div className="calendar">
            <div className="header">
                <div className="prev" onClick={prevMonth}>Previous</div>
                <div className="month">{months[date.getMonth()]} {date.getFullYear()}</div>
                <div className="next" onClick={nextMonth}>Next</div>
            </div>
            <div className="weekdays">
                {weekdays.map(day => (
                    <div key={day} className="weekday">{day}</div>
                ))}
            </div>
            <div className="days">
                {monthDays()}
            </div>
            {selectedDate && (
                <div className="selected-date">
                    Selected Date: {selectedDate.toLocaleDateString()}
                </div>
            )}
        </div>
    );
};

export default ACalendar;