// import './App.css';
// import Navbar from './Employee/eNavbar';
import EmployeePTO from './Employee/ePTO';
import ERequest from './Employee/eRequest';
import EHistory from './Employee/eHistory';
import ECalendar from './Employee/eCalendar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
          <div className="content">
            <Routes>
              <Route path="/ePTO" element={<EmployeePTO />}></Route>
              <Route path="/eRequest" element={<ERequest />}></Route>
              <Route path="/eHistory" element={<EHistory />}></Route>
              <Route path="/eCalendar" element={<ECalendar />}></Route>
              <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
          </div>
          
      </div>
    </Router>
  );
}

export default App;
