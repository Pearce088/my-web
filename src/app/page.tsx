import '../styles/globals.css';
import { FaUser, FaLock } from "react-icons/fa";    

export default function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <FaUser className="icon"/>
                        <input type="text" id="UCP" placeholder="UCP Name" required />
                    </div>
                    <div className="form-group">
                        <FaLock className="icon"/>
                        <input type="password" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}