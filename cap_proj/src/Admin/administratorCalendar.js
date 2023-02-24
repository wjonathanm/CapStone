import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";

const administratorCalendar = () => {
    return (
        <>
            <Navbar/>
            <div className="calendarview">
                <ACalendar/>
            </div>
        </>
    );
}

export default administratorCalendar;