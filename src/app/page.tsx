import '../styles/globals.css';
import { FaUser } from "react-icons/fa";    

export default function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="text">UCP</label>
                        <input type="text" id="UCP" placeholder="Masukkan UCP Anda" required />
                        <FaUser />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password Anda" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}