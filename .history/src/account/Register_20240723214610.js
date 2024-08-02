import "./register.css";

const Register = () => {
    return ( 
        <div className="r-form">
            <form >
                <section>
                    <label htmlFor="username">username:</label>
                    <input type="text" name="username" id="username" placeholder="write username here" />
                </section>
                <section>
                    <label htmlFor="password1">password:</label>
                    <input type="password" name="password1" id="password1" placeholder="write password" />
                </section>
                <section className="password2">
                    <label htmlFor="password2">confirm password:</label>
                    <input type="password" name="password2" id="password2" placeholder="confirm password" />
                </section>
                <button type="submit">Register</button>
            </form>
        </div>
     );
}
 
export default Register;