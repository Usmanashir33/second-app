import "./register.css";

const Register = () => {
    return ( 
        <div className="form">
            <form >
                <section>
                    <label htmlFor="username"></label>
                    <input type="text" name="username" id="username" placeholder="Write userna" />
                </section>
            </form>
        </div>
     );
}
 
export default Register;