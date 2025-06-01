"use client";

import Link from "next/link";
import './signup.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../utils/axiosInstance'; // adjust path if needed

const Signup = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      window.alert("Please fill in all the fields.");
      return;
    }

    if (!email.includes('@')) {
      window.alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post('/auth/signup', {
        username: name,
        email,
        password
      });

      if (response.status === 201 || response.status === 200) {
        alert('Signup successful! Please login now.');
        router.push('/login');
      } else {
        alert('Signup failed: Unexpected response from server.');
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      if (error.response?.data?.detail) {
        alert(`Signup failed: ${error.response.data.detail}`);
      } else {
        alert('Signup failed: Something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="main-heading">Welcome to our Management System</h1>
      <div className="cont">
        <div className="form sign-in">
          <h2>SignUp Here!</h2>
          <div className="input-group">
            <label>User Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>
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

          <button
            type="button"
            className="submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img__text">
              <h3>Do you already have an account? Please Login!</h3>
            </div>
            <div className="img__btn">
              <Link href="/login" className="m--up">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
