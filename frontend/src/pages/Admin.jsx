import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [problem, setProblem] = useState({ title: '', difficulty: 'Easy', description: '', constraints: '', examples: '', tags: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:8080/api/problems', problem, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Problem added successfully!');
    } catch (err) {
      alert('Failed to add problem. Are you an admin?');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Panel: Add Problem</h1>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl border border-slate-800 space-y-4">
        <input className="w-full bg-slate-950 p-3 rounded text-white border border-slate-700" placeholder="Title" onChange={e => setProblem({...problem, title: e.target.value})} />
        <textarea className="w-full bg-slate-950 p-3 rounded text-white border border-slate-700" placeholder="Description" onChange={e => setProblem({...problem, description: e.target.value})} />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold">Add Problem</button>
      </form>
    </div>
  );
};
export default Admin;