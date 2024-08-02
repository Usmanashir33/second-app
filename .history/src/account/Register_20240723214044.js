import "./register.css";

const Register = () => {
    return ( 
        <div className="form">
            <form >
                <section>
                    <label htmlFor="user"></label>
                    <input type="text" name="username" id="username" />
                </section>
            </form>
        </div>
     );
}
 
export default Register;