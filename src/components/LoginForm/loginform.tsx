import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css';

const LoginPage = () => {
    return (
        //login-page adalah nama class yang kita buat di css.
        <div className="login-page">
            {/* login-form adalah nama class yang kita buat di css. */}
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    {/* //form-group adalah nama class yang kita buat di css. */}
                    <div className="form-group">
                        <FaUser className="icon" />
                        <input type="text" id="UCP" placeholder="UCP Name" required /> {/* Fungsi required adalah untuk input wajib yang harus diisi user */}
                    </div>
                    <div className="form-group">
                        <FaLock className="icon" />
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
