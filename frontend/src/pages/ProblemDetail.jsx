import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('Java');
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        // FIXED: Changed to GET request and pointed to the problems endpoint
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/problems/${id}`);
        setProblem(response.data);
      } catch (err) {
        console.error("Failed to load problem", err);
      }
    };
    fetchProblem();
  }, [id]);

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    
    // If there is no token, redirect to login
    if (!token) {
      navigate('/login');
      return;
    }

    setSubmitStatus('Submitting...');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/submissions`, 
        { problemId: id, language, code },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSubmitStatus('Submitted successfully! (Execution engine coming soon)');
    } catch (err) {
      console.error(err);
      setSubmitStatus('Failed to submit code. Check console for details.');
    }
  };

  if (!problem) return <div className="text-white text-center mt-12">Loading...</div>;

  return (
    <div className="h-[calc(100vh-64px)] grid grid-cols-2 gap-4 p-4 bg-slate-950">
      {/* Left Side: Problem Description */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 overflow-y-auto">
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="text-2xl font-bold text-slate-100">{problem.id}. {problem.title}</h1>
          <span className="px-2 py-1 rounded bg-slate-800 text-xs font-medium text-emerald-400 border border-emerald-800/50">
            {problem.difficulty}
          </span>
        </div>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
          <p>{problem.description}</p>
          <div>
            <h3 className="text-lg font-semibold text-slate-200">Examples</h3>
            <pre className="bg-slate-950 border border-slate-800 p-4 rounded-lg mt-2 text-sm">{problem.examples}</pre>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-200">Constraints</h3>
            <pre className="bg-slate-950 border border-slate-800 p-4 rounded-lg mt-2 text-sm">{problem.constraints}</pre>
          </div>
        </div>
      </div>

      {/* Right Side: Code Editor Area */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <select 
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-1 text-sm focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>Java</option>
            <option>Python</option>
            <option>C++</option>
            <option>JavaScript</option>
          </select>
          <button 
            onClick={handleSubmit}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            Submit Code
          </button>
        </div>

        <textarea
          className="flex-grow bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-300 font-mono text-sm focus:outline-none focus:border-indigo-500 resize-none"
          placeholder="Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
        {submitStatus && (
          <div className="mt-4 text-sm font-medium text-indigo-400 bg-indigo-900/20 p-2 rounded border border-indigo-800/50 text-center">
            {submitStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemDetail;