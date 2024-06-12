import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/shared/Dashboard';
import Products from './components/Products';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
