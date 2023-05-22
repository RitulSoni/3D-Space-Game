import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/home.js';

export default function App() {
  const [showSpline, setShowSpline] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(false);
      setShowButton(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/home");
    setButtonClicked(true);
  }

  return (
    <div className="App">
      <NavBar />

      {showSpline && 
        <div className="App-spline">
          <Spline scene="https://prod.spline.design/MEHV8aAVdFEvGaAN/scene.splinecode" />
        </div>
      }

      {showButton && !buttonClicked && 
        <button className="transparent-button" onClick={handleClick}>
          <Spline scene="https://prod.spline.design/xDv3ZhzpGvGIxhGj/scene.splinecode" />
        </button>
      }

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
