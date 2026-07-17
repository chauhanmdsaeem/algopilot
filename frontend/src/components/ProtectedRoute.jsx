import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // If there is no token, redirect the user to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If they have a token, render the protected component
  return children;
};

export default ProtectedRoute;