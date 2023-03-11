import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Employee(){
    const navigate = useNavigate();
    const [employee, setEmployee] = useState('');
    const [displayusername,setDisplayUser] = useState('');
    useEffect( () => {
        // frontend test
        // let username = sessionStorage.getItem('username');
        // if (username === '' || username === null){
        //     navigate('/');
        // }else{
        //     setDisplayUser(username);
        //     fetch("http://localhost:8000/user/" + username)
        //         .then((res) => {
        //             return res.json();
        //         }).then((resp) => {
        //             setEmployees(resp);
        //         }).catch((err) => {
        //             console.log(err.message);
        //         });
        // }
        // db test
        fetch("/employee").then(
            resp => resp.json()
        ).then(
            data => {
                setEmployee(data)
            }
        )
    }, []);
    return(
        <div>
            <h1 className="text-center">Welcome to Nihira Techiees</h1>
            <div>{employee.id}</div>
            <div>{employee.password}</div>
            <div>{employee.FirstName}</div>
        </div>
    )
}
export default Employee;