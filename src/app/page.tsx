
import '../styles/globals.css';

export default function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="text">UCP</label>
                        <input type="text" id="UCP" placeholder="Masukkan UCP Anda" required />
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