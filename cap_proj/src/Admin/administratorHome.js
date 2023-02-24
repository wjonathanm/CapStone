import Navbar from "./administratorNavbar";
import ACalendar from "./aCalendar";

const administratorHome = () => {

    return ( 
        <>
            <Navbar/>
            <div className="sidebar">
                <h2>--Name Here--</h2>
                <h2>Modify User</h2>
                <h2>Delete Employee</h2>
                <h2>Set Holidays</h2>
                <h2>See All Request</h2>
            </div>
            <div className= "adminwelcome">
                <h2>Welcome Admin!</h2>
            </div>
            <div className="calendarview">
            <ACalendar/>
            </div>
        </>

     );
}
 
export default administratorHome;