import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import User from './components/user/user';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
