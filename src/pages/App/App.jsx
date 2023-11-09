import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../Login/LoginPage';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      React Movies
    </main>
  );
}


