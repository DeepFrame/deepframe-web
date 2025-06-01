"use client";

import Link from "next/link";
import './login.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      window.alert("Please fill in all the fields.");
      return;
    }

    if (!email.includes('@')) {
      window.alert("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('username', email);  // Backend matches email as username
      params.append('password', password);

      const response = await axiosInstance.post('/auth/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const token = response.data.access_token;
      if (token) {
        localStorage.setItem('token', token);
        alert('Login successful!');
        router.push('/next_to_login');  // Update with your actual post-login route
      } else {
        alert('Login failed: No token received');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      alert('Login failed: Please check your email and password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="main-heading">Welcome to our Management System</h1>

      <div className="cont">
        <div className="form sign-in">
          <h2>Login Here!</h2>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <Link href="/forget_password">
            <p className="text-center">Forgot password?</p>
          </Link>
          <button
            type="button"
            className="submit"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img__text">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__btn">
              <Link href="/signup" className="m--up">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
