import '../signup.css';
// hey remember to make it so that the stuff entered actually goes in the json file.
function Signup(){
    return(
        <div className='login2'>
            <h2 className='h22'> Enter Info </h2>
            <form action='/signup' method='post'>
                <label className='label2'>
                    User Id:<input className='input2' type='userId' name='userId' />
                </label>
                <label className='label2'>
                    Password:<input className='input2' type='password' name='password'/>
                </label>
                <label className='label2'>
                    First Name:<input className='input2' type='fname' name='fname'/>
                </label>
                <label className='label2'>
                    Last Name:<input className='input2' type='lname' name='lname'/>
                </label>
                <label className='label2'>
                    Email:<input className='input2' type='email' name='email'/>
                </label>
                <button className='button2' type='submit' name='signup' value='signup' onClick='/'> Submit </button>
            </form>
        </div>
    );
};
export default Signup;