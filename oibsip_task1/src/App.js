import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Adjust the path based on your project structure

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/></>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
