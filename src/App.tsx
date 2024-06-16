import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './App.css'
import Library from './pages/LibraryPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Header from './components/Layout/Header';
import { useAuth } from './context/AuthContext';

function App() {
  const { logout } = useAuth();

  return (
    <>
      <Header handleLogout={logout} />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/books/show/:id" element={<BookDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App
