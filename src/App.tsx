import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages';
import SignupPage from './pages/signUp';
import LoginPage from './pages/logIn';
import Home from './pages/Home';
import Market from './pages/Market';
import Trade from './pages/Trade';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Market' element={<Market/>}/>
        <Route path='/trade' element={<Trade/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
