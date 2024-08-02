import {useState } from "react";
import "./register.css";
import useLogin from "../hooks/LoginHook";
import useRegister from "../hooks/RegisterHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";

const Register = () => {
    const resetForm = () => {
        setUsername('');setPassword1('');setPassword2('');setemail('')
        }
    const [passwordmis,setPasswordMis]= useState(false);
    const [passwordVis,setPasswordVis] = useState(false)
    const [password2Vis,setPassword2Vis] = useState(false)
    const [haveaccount,setHaveAccount] = useState(false);
    const {logging,failed,login} = useLogin(resetForm);
    const {registered,failedR,register} = useRegister(setHaveAccount);
    const [username,setUsername]= useState('');
    const [email,setemail]= useState('');
    const [password1,setPassword1]= useState('');
    const [password2,setPassword2]= useState('');
    
    const checkPassword = (e) => {
        if(password1 == e.target.value){
            setPasswordMis(false);
        }else{
            setPasswordMis(true);
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        if (haveaccount){ // login
            const user = {email,password:password1}
            login(user);
        }else{ // register
            const new_user = {username,password:password1,re_password:password2}
            register(new_user);
        }

    }
    // return !isAuthenticated? ( 
    return( 
        <div className="r-form">
            { logging && <div className="loading-container">{logging}</div>}
            {failed && <div className="failed-container">{failed}</div>}
            
            { registered && <div className="loading-container">{registered}</div>}
            {failedR && <div className="failed-container">{failedR}</div>}
            
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
                    <input type="text" name="username" id="username" 
                    required value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder=" email (e.g parson@" />
                </section>
                <section>
                    <input type={passwordVis? 'text':'password'} name="password1" id="password1"
                    required value={password1} onChange={(e) => {setPassword1(e.target.value)}}   
                    placeholder=" password" />
                    <FontAwesomeIcon
                        icon={passwordVis? faEye : faEyeSlash} 
                        onClick={(e) => {setPasswordVis(!passwordVis)}}
                        className="password-eye"
                        
                    />
                </section>
                { !haveaccount && <section className="password2">
                    <input type={password2Vis? 'text':'password'} name="password2" id="password2"
                    required value={password2} onChange={(e) => {
                        setPassword2(e.target.value);
                        checkPassword(e);
                        }}  
                    placeholder="confirm password" />
                    <FontAwesomeIcon
                        icon={password2Vis? faEye : faEyeSlash}
                        onClick={(e) => {setPassword2Vis(!password2Vis)}}
                        className="password-eye"
                        
                    />
                </section>}
                {(!haveaccount && passwordmis ) && <p className="error-password">passwords mismatched</p>}
                {!haveaccount && <p className="have-account">already have account? <span onClick={(e) => {setHaveAccount(true)}}>Login</span></p>}
                {haveaccount && <p className="have-account">Don't have account? <span onClick={(e) => {setHaveAccount(false)}}>Register</span></p>}
                {!haveaccount && <button type="submit">Register</button>}
                {haveaccount && <button type="submit">Login</button>}
            </form>
        </div>
    //  ) : <Redirect to='/'/>;
     );
}
 
export default Register;