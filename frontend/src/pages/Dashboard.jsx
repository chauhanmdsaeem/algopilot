import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalSolved: 0, totalSubmissions: 0, points: 0, recentSubmissions: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:8080/api/dashboard/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center text-slate-400 py-12">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-100 mb-8">My Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-slate-400 font-medium mb-2">Problems Solved</h3>
          <p className="text-4xl font-bold text-indigo-400">{stats.totalSolved}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-slate-400 font-medium mb-2">Total Submissions</h3>
          <p className="text-4xl font-bold text-emerald-400">{stats.totalSubmissions}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-slate-400 font-medium mb-2">Total Points</h3>
          <p className="text-4xl font-bold text-amber-400">{stats.points}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-bold text-slate-200 mb-4">Recent Activity</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        {stats.recentSubmissions.length === 0 ? (
          <div className="p-6 text-slate-500 text-center">No recent submissions found. Go solve some problems!</div>
        ) : (
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-800/50 text-slate-300 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Problem ID</th>
                <th className="px-6 py-4">Language</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {stats.recentSubmissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-800/25 transition-colors">
                  <td className="px-6 py-4">
                    <Link to={`/problems/${sub.problemId}`} className="text-indigo-400 hover:text-indigo-300">
                      Problem #{sub.problemId}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{sub.language}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(sub.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;