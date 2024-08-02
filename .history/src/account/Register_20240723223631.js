import { useState } from "react";
import "./register.css";

const Register = () => {
    const [haveaccount,setHaveAccount] = useState(false)
    return ( 
        <div className="r-form">
            <form >
                {!haveaccount && <h2>Welcome to mini-x</h2>}
                {haveaccount && <h2>Welcome back to mini-x</h2>}
                {!haveaccount && <p className="welcoming">we are delighted to see you here,register with your details below</p>}
                { haveaccount && <p className="welcoming">Sign up with your details below</p>}
                <section>
                    <input type="text" name="username" id="username" placeholder=" username" />
                </section>
                <section>
                    <input type="password" name="password1" id="password1" placeholder=" password" />
                </section>
                { !<section className="password2">
                    <input type="password" name="password2" id="password2" placeholder="confirm password" />
                </section>}
                <p className="have-account">already have account? <span onClick={(e) => {setHaveAccount(true)}}>Login</span></p>
                <p className="have-account">Don't have account? <span onClick={(e) => {setHaveAccount(false)}}>Register</span></p>
                <button type="submit">Register</button>
                <button type="submit">Login</button>
            </form>
        </div>
     );
}
 
export default Register;