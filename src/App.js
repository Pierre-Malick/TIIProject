import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"
import useToken from './components/useToken';
import Login from './pages/Auth'

import HomePage from './pages/Home.js'
import DashB from './pages/Dashboard'
import Preconizations from "./pages/Preconizations";



//check jwt token
// const token = localStorage.getItem("token");
// if (token) {
//     setAuthToken(token);
// }
// function setToken(userToken) {
//   localStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = localStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<DashB />} />
        <Route path="/preconizations" element={<Preconizations />} />
        {/* <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
