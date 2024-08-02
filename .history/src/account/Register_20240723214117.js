import "./register.css";

const Register = () => {
    return ( 
        <div className="form">
            <form >
                <section>
                    <label htmlFor="username">User</label>
                    <input type="text" name="username" id="username" placeholder="Write username here" />
                </section>
            </form>
        </div>
     );
}
 
export default Register;