import { useState } from "react";
import "./register.css";

const Register = () => {
    const [haveaccount,setHaveAccount] = useState(false);
    const [username,setUsername]= useState()
    return ( 
        <div className="r-form">
            <form >
                {!haveaccount && <h1>Welcome to mini-x</h1>}
                {haveaccount && <h2>Welcome back to mini-x</h2>}
                {!haveaccount && <p className="welcoming">we are delighted to see you here,register with your details below</p>}
                { haveaccount && <p className="welcoming">Sign up with your details below</p>}
                <section>
                    <input type="text" name="username" id="username" placeholder=" username" />
                </section>
                <section>
                    <input type="password" name="password1" id="password1" placeholder=" password" />
                </section>
                { !haveaccount && <section className="password2">
                    <input type="password" name="password2" id="password2" placeholder="confirm password" />
                </section>}
                {!haveaccount && <p className="have-account">already have account? <span onClick={(e) => {setHaveAccount(true)}}>Login</span></p>}
                {haveaccount && <p className="have-account">Don't have account? <span onClick={(e) => {setHaveAccount(false)}}>Register</span></p>}
                {!haveaccount && <button type="submit">Register</button>}
                {haveaccount && <button type="submit">Login</button>}
            </form>
        </div>
     );
}
 
export default Register;