import { useContext, useState } from "react";
import "./register.css";
import { authContext } from "../contexts/AuthContext";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
    const {isAuthenticated} = useContext(authContext);
    const history = useHistory();
    const [haveaccount,setHaveAccount] = useState(false);
    const [username,setUsername]= useState('');
    const [password1,setPassword1]= useState('');
    const [password2,setPassword2]= useState('');
    const resetForm = () => {
    setUsername('');setPassword1('');setPassword2('')
    }
    const handleForm = (e) => {
        e.preventDefault();
        if (haveaccount){ // login
            const user = {username,password1}
            alert('user');
            resetForm()

        }else{ // register
            const new_user = {username,password1,password2}
            alert('new');
            resetForm()
        }

    }
    return !isAuthenticated? ( 
        <div className="r-form">
            <form onSubmit={(e) => {handleForm(e)}}>
                {!haveaccount && <h1>Welcome to mini-x</h1>}
                {haveaccount && <h1>Welcome back to mini-x</h1>}
                {!haveaccount && <p className="welcoming">we are delighted to see you here,register with your details below</p>}
                { haveaccount && <p className="welcoming">Sign up with your details below</p>}
                <section>
                    <input type="text" name="username" id="username" 
                    required value={username} onChange={(e) => {setUsername(e.target.value)}}  placeholder=" username" />
                </section>
                <section>
                    <input type="password" name="password1" id="password1"
                    required value={password1} onChange={(e) => {setPassword1(e.target.value)}}   placeholder=" password" />
                </section>
                { !haveaccount && <section className="password2">
                    <input type="password" name="password2" id="password2"
                    required value={password2} onChange={(e) => {setPassword2(e.target.value)}}   placeholder="confirm password" />
                </section>}
                {!haveaccount && <p className="have-account">already have account? <span onClick={(e) => {setHaveAccount(true)}}>Login</span></p>}
                {haveaccount && <p className="have-account">Don't have account? <span onClick={(e) => {setHaveAccount(false)}}>Register</span></p>}
                {!haveaccount && <button type="submit">Register</button>}
                {haveaccount && <button type="submit">Login</button>}
            </form>
        </div>
     ) : <Redirect to='h'/>;
}
 
export default Register;