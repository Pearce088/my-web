import React from 'react';
import Link from 'next/link';
import './NavBar.css'

export const NavBar = async () => {
  return (
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
                <img src="/jt-logo.png" alt="Logo" />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="nav-links">
            <Link className="nav-link" href="/">
              HOME
            </Link>
            <Link className="nav-link" href="/register">
              REGISTER
            </Link>
            <Link className="nav-link" href="/components/LoginForm/LoginForm">
              SIGN IN
            </Link>
            <a className="nav-link" href="https://discord.gg/x2AFCU65T4" target="_blank" rel="noopener noreferrer">
              DISCORD
            </a>
          </div>
        </div>
      </nav>
  );
};