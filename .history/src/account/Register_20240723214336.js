import "./register.css";

const Register = () => {
    return ( 
        <div className="register-form">
            <form >
                <section>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Write username here" />
                </section>
                <section>
                    <label htmlFor="pas">Username</label>
                    <input type="password" name="pas" id="pas" placeholder="Write username here" />
                </section>
                <section className="password2">
                    <label htmlFor="password2">Username</label>
                    <input type="password" name="password2" id="password2" placeholder="Confirm password" />
                </section>
            </form>
        </div>
     );
}
 
export default Register;