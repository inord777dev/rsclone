import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './components/main/main';
import Home from './components/main/home/home';
import Profile from './components/profile/profile';
import Order from './components/order/order';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="user" element={<Profile />} />
          <Route path="user/order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
