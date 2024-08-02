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
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Write username here" />
                </section>
                <section className="password2">
                    <label htmlFor="passwo">Username</label>
                    <input type="text" name="passwo" id="passwo" placeholder="Write username here" />
                </section>
            </form>
        </div>
     );
}
 
export default Register;