import { useState } from "react";
import {useNavigate} from "react-router-dom";
import '../css/login.css'
import LoginHeader from "./LoginHeader";
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
                if (data[i].role.toLowerCase() === "employee") {
                    navigate("/ePTO");
                } else if (data[i].role.toLowerCase() === "manager") {
                    navigate("/mHome");
                } else if (data[i].role.toLowerCase() === "director") {
                    navigate("/administratorHome");
                }else{
                    alert("Employee not Found.")
                }
            }
        })
    }
    return (
        <div>
            <LoginHeader />
            <div className="beginning">
                <div className="login">
                    <h2 className="h2"> Welcome to Aldi </h2>
                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            Id<input type="text" className="input" required value={userid} onChange={(e) => setUserid(e.target.value)}/>
                        </label>
                        <label className="label">
                            Email<input type="text" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <button type="submit" className="button" value="login"> submit </button>
                        <br />
                        <a href="/signup" className="signup"> signup </a>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;
