import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './App.css'
import IndexPage from './pages/IndexPage';
import BookDetailsPage from './pages/BookDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/books/show/:id" element={<BookDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App
