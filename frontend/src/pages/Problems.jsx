import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 10;

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/problems');
        setProblems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch problems. Is the backend running?');
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  // Filter Logic
  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || problem.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  // Pagination Logic (Applied AFTER filtering)
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage) || 1;

  const getDifficultyStyles = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50';
      case 'medium': return 'bg-amber-900/30 text-amber-400 border-amber-800/50';
      case 'hard': return 'bg-rose-900/30 text-rose-400 border-rose-800/50';
      default: return 'bg-slate-900/30 text-slate-400 border-slate-800/50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Coding Problems</h1>
      </div>

      {error && (
        <div className="bg-rose-900/20 border border-rose-900/50 text-rose-400 px-4 py-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      {/* Filters Section */}
      <div className="flex gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Search problems..." 
          className="flex-grow bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
        <select 
          className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
          value={difficultyFilter}
          onChange={(e) => { setDifficultyFilter(e.target.value); setCurrentPage(1); }}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-800/50 text-slate-300 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Tags</th>
              <th className="px-6 py-4">Difficulty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {loading ? (
              <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500">Loading problems...</td></tr>
            ) : currentProblems.length === 0 ? (
              <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500">No problems match your filters.</td></tr>
            ) : (
              currentProblems.map((problem) => (
                <tr key={problem.id} className="hover:bg-slate-800/25 transition-colors group">
                  <td className="px-6 py-4 text-slate-600">⚪</td>
                  <td className="px-6 py-4 font-medium text-slate-200 group-hover:text-indigo-400 transition-colors">
                    <Link to={`/problems/${problem.id}`}>{problem.id}. {problem.title}</Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {problem.tags && problem.tags.split(',').map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400">{tag.trim()}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getDifficultyStyles(problem.difficulty)}`}>{problem.difficulty}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && filteredProblems.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-300">{indexOfFirstProblem + 1}</span> to <span className="font-medium text-slate-300">{Math.min(indexOfLastProblem, filteredProblems.length)}</span> of <span className="font-medium text-slate-300">{filteredProblems.length}</span> results
          </p>
          <div className="flex gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-50">Previous</button>
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problems;