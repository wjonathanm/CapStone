import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Employee from "./RouterPages/Employee";

import AdministratorHome from './Admin/AdministratorHome';
import AdministratorSetHoliday from './Admin/AdministratorSetHoliday';
import AdministratorCUser from "./Admin/AdministratorCUser";


import ManagerHome from './Manager/mHome';
import ManagerCalendar from './Manager/mCalendar';
import ManagerHistory from './Manager/mHistory';
import ManagerTeam from './Manager/ManagerTeam';
import ManagerRequest from './Manager/mRequest'

import EmployeePTO from './Employee/ePTO';
import ERequest from './Employee/eRequest';
import EHistory from './Employee/eHistory';
import ECalendar from './Employee/eCalendar';
import NotFound from './NotFound';


function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/employee' element={<Employee /> } />

            <Route path="/ePTO" element={<EmployeePTO />}></Route>
            <Route path="/eRequest" element={<ERequest />}></Route>
            <Route path="/eHistory" element={<EHistory />}></Route>
            <Route path="/eCalendar" element={<ECalendar />}></Route>
            <Route path="*" element={ <NotFound /> }></Route>
            <Route path="/eCalendar" element={<ECalendar />}></Route>

            <Route path="/mHome" element={<ManagerHome />}></Route>
            <Route path="/mCalendar" element={<ManagerCalendar />}></Route>
            <Route path="/mHistory" element={<ManagerHistory />}></Route>
            <Route path="/mteam" element={<ManagerTeam />}></Route>
            <Route path="/mRequest" element={<ManagerRequest />}></Route>

            <Route path="/administratorHome" element={<AdministratorHome />}></Route>
            <Route path="/administratorSetHoliday" element={<AdministratorSetHoliday />}></Route>
            <Route path="/administratorCUser" element={<AdministratorCUser />}></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
