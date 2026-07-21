import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/leaderboard`);
        setLeaders(response.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Global Leaderboard</h1>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-800/50 text-slate-300 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4 w-24 text-center">Rank</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4 text-center">Problems Solved</th>
              <th className="px-6 py-4 text-right">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {loading ? (
              <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500">Loading standings...</td></tr>
            ) : leaders.length === 0 ? (
              <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500">No data available yet.</td></tr>
            ) : (
              leaders.map((user) => (
                <tr key={user.username} className="hover:bg-slate-800/25 transition-colors">
                  <td className="px-6 py-4 text-center font-bold text-slate-300">
                    {user.rank === 1 ? '🥇 1' : user.rank === 2 ? '🥈 2' : user.rank === 3 ? '🥉 3' : user.rank}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-200">{user.username}</td>
                  <td className="px-6 py-4 text-center text-indigo-400">{user.solved}</td>
                  <td className="px-6 py-4 text-right font-bold text-amber-400">{user.points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;