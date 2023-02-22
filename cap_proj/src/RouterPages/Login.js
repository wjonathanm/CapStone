import '../App.css';
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // function handlePass( p ){
    //     setPassword(p.target.value);
    //     console.log(password);
    // }
    function handleUsername( i ){
        setUsername(i.target.value);
        console.log( username )
    }
    function handleEmail( e ){
        setEmail(e.target.value);
        console.log( email )
    }
    useEffect( () => {
        sessionStorage.clear();
    }, []);
    const navigate = useNavigate();
    function ProceedLogin(e){
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/Employees/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                if (Object.keys(resp).length === 0 ){
                    alert('Please Enter Valid Username');
                } else {
                    if (resp.Email === email && resp.Role === 'Employee') {
                        console.log(username);
                        sessionStorage.setItem('username', username)
                        navigate('/employee');
                    }else if (resp.Email === email && resp.Role === 'Manager') {
                        console.log(username);
                        sessionStorage.setItem('username', username)
                        navigate('/manager');

                    }else if (resp.Email === email && resp.Role === 'Director'){
                        console.log(username);
                        sessionStorage.setItem('username', username)
                        navigate('/administratorHome');
                    }else{
                        alert('Please enter valid credentials');
                    }
                }
            }).catch((err) => {
                console.log('Login Failed due to:' + err.message);
            });
        }
    }
    function validate(){
        let result = true;
        if (username === '' || username === null ){
            result = false;
            alert('Please Enter Username');
        }
        // if (password === '' || password === null){
        //     result = false;
        //     alert('Please Enter Password');
        // }
        if (email === '' || email === null){
            result = false;
            alert('Please Enter Email');
        }
        return result;
    }
    return (
        <div className="login">
            <h2> Welcome to Aldi </h2>
            <form onSubmit={ProceedLogin} action="/Login.js" name="login" method="get">
                <label className="label">
                    Id:<input type="text" onChange={handleUsername} className="input"/>
                </label>
                {/*<label className="label">*/}
                {/*    Password: <input type="text" onChange={handlePass} className="input"/>*/}
                {/*</label>*/}
                <label className="label">
                    Email:<input type="text" onChange={handleEmail} className="input"/>
                </label>
                <br />
                <button type="submit" className="button" value="login"> submit </button>
                <a href="/signup"> signup </a>
            </form>
        </div>
    );
}
export default Login;
