import { useState } from "react";
import {useNavigate} from "react-router-dom";
import '../css/login.css'
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
                    navigate("/ePTO");
                }else if(data[i].role === "Manager"){
                    navigate("/mHome");
                }else if(data[i].role === "Director"){
                    navigate("/administratorHome");
                }else{
                    alert("Employee not Found.")
                }
            }
        })
    }
    return (
        <div>
            <div className="login-background">
                <div className="login">
                    <h2 className="h2"> Welcome to Aldi </h2>
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
            </div>
        </div>
    );
}
export default Login;
