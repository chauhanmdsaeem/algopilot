import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');

    try {
      // Send data to Spring Boot API
      await axios.post('http://localhost:8080/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      // If successful, send them to the login page
      navigate('/login');
    } catch (err) {
      // Capture error message from backend if email is already used
      setError(err.response?.data || 'An error occurred during signup');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-slate-100">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm text-center bg-red-900/20 py-2 rounded border border-red-900/50">{error}</div>}
          <div className="space-y-4">
            <input name="name" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Full Name" onChange={handleChange} />
            <input name="email" type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Email address" onChange={handleChange} />
            <input name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Password" onChange={handleChange} />
            <input name="confirmPassword" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Confirm Password" onChange={handleChange} />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-colors shadow-lg shadow-indigo-900/50">
            Sign up
          </button>
        </form>
        <p className="text-center text-sm text-slate-400">
          Already have an account? <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;