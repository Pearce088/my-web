// pages/users.js

import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function LoginPage() {
  const [UCP, setUCP] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UCP, password }),
      });
      const data = await response.json();
      if (data.message === 'Login successful') {
        alert('Login Berhasil');
      } else {
        alert('Login gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Terjadi kesalahan saat login. Silakan coba lagi.');
    }
  };

  return (
      <div className="login-page">
          <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="UCP">UCP</label>
                      <input type="text" id="UCP" placeholder="Masukkan UCP Anda" required value={UCP} onChange={(e) => setUCP(e.target.value)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" placeholder="Masukkan password Anda" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit">Login</button>
              </form>
          </div>
      </div>
  );
}