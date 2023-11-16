
import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from './pages/sign';
import User from './pages/user'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/index.html" element={<Home />} />
        <Route path='/signin/profile' element={<User />} />

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
