import '../App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Signup from './Signup';
import Employee from "./Employee";
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/employee' element={<Employee /> } />
            </Routes>
        </BrowserRouter>
    );
}
export default App;