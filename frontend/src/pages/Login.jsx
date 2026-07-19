import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');

    try {
      // Call the Spring Boot login API
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData);
      
      // Save the JWT to the browser's local storage
      const token = response.data.token;
      localStorage.setItem('token', token);
      
      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-slate-100">Sign in to AlgoPilot</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm text-center bg-red-900/20 py-2 rounded border border-red-900/50">{error}</div>}
          <div className="space-y-4">
            <input name="email" type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Email address" onChange={handleChange} />
            <input name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-700 bg-slate-800 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors" placeholder="Password" onChange={handleChange} />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-colors shadow-lg shadow-indigo-900/50">
            Sign in
          </button>
        </form>
        <p className="text-center text-sm text-slate-400">
          Don't have an account? <Link to="/signup" className="font-medium text-indigo-400 hover:text-indigo-300">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;