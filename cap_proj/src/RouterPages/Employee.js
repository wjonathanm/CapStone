import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Employee(){
    const navigate = useNavigate();
    const[displayusername,setDisplayUser] = useState('');
    useEffect( () => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null){
            navigate('/login');
        }else{
            setDisplayUser(username);
        }
    })
    return(
        <div>
            <h1>Hello from employee</h1>
        </div>
    )
}
export default Employee;