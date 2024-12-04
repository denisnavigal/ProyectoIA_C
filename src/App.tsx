import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { ProtectedRoute } from './components/auth/protected-route';
import { Home } from './pages/home';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import { Dashboard } from './pages/dashboard';
import { Inventory } from './pages/inventory';
import { Menu } from './pages/menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}