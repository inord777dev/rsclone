import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './i18n/config';
import './App.css';
import Main from './components/main/main';
import Home from './components/main/home/home';
import Profile from './components/profile/profile';
import Order from './components/order/order';
import Admin from './components/admin/admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="user" element={<Profile />} />
          <Route path="user/order" element={<Order />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
