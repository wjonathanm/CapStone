import '../css/login.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginHeader from "./LoginHeader";
// hey remember to make it so that the stuff entered actually goes in the json file.
function Signup(){
    const [userid2, setUserid2] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!["director", "manager", "employee"].includes(role)) {
            alert("Please enter a valid role (director/manager/employee).");
            return;
        }

        // Check if userid2 is not a number
        if (isNaN(userid2)) {
            alert("Please enter a valid user ID (must be a number).");
            return;
        }

        // Check if email is a valid email address
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const employee = { userid2, fname, lname, email, role };

        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(resp => resp.json()
        )
        navigate("/")
    }
    return(
        <div>
            <LoginHeader />
            <div className="beginning2">
                <div className='signu'>
                    <h2 className='h22'> Enter Your Information </h2>
                    <form action='/signup' method='post' onSubmit={handleSubmit}>
                        <label className='label2'>
                            User Id<input className='input2' required value={userid2} onChange={(e) => setUserid2(e.target.value)} />
                        </label>
                        <label className='label2'>
                            First Name<input className='input2' required value={fname} onChange={(e) => setFname(e.target.value)}/>
                        </label>
                        <label className='label2'>
                            Last Name<input className='input2' required value={lname} onChange={(e) => setLname(e.target.value)}/>
                        </label>
                        <label className='label2'>
                            Email<input className='input2' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <button className='button2' type='submit' name='signup' value='signup' onClick='/'> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Signup;