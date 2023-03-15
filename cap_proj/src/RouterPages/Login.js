import '../css/login.css';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function Login() {
    const [userid, setUserid] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const employee = { userid, email };

        fetch('/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(resp => resp.json()
        ).then(data => {
            for( let i = 0; i < data.length; i++){
                if(data[i].role === "Employee"){
                    navigate("/employee");
                }
            }
        })
    }
    return (
        <div className="login">
            <h2> Welcome to Aldi </h2>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Id:<input type="text" className="input" required value={userid} onChange={(e) => setUserid(e.target.value)}/>
                </label>
                <label className="label">
                    Email:<input type="text" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="button" value="login"> submit </button>
                <a href="/signup"> signup </a>
            </form>
        </div>
    );
}
export default Login;
