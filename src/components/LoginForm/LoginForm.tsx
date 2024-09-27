import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css';

export const LoginPage = async () => {
    return (
    <div className="login-page">
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <input type="text" id="UCP" placeholder="UCP Name" required />
                    <FaUser className="icon"/>
                </div>
                <div className="form-group">
                    <input type="password" id="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
    );
};