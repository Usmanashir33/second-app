import "./register.css";

const Register = () => {
    return ( 
        <div className="r-form">
            <form >
                <h2>welcome to mini-x</h2>
                <p>
                    we are delighted to see you here,register with your details below
                </p>
                <section>
                    <input type="text" name="username" id="username" placeholder=" username" />
                </section>
                <section>
                    <input type="password" name="password1" id="password1" placeholder=" password" />
                </section>
                <section className="password2">
                    <input type="password" name="password2" id="password2" placeholder="confirm password" />
                </section>
                <p>already have account?</p>
                <button type="submit">Register</button>
            </form>
        </div>
     );
}
 
export default Register;