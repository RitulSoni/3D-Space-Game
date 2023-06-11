import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import NavBar from './NavBar/NavBar';

export default function App() {
  const [showButton, setShowButton] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loadingTransition, setLoadingTransition] = useState(false);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setButtonClicked(true);
    setLoadingTransition(true);
    setTimeout(() => {
      setShowHome(true);
      setLoadingTransition(false);
      window.dispatchEvent(new Event('resize'));
    }, 15000);
  }
  
 
  function onKeyDown(e) {
    if (e.target.name === 'Key Enter') {
      console.log('I have been clicked!');
      setTimeout(() => {
        setButtonClicked(true);
        window.dispatchEvent(new Event('resize'));
      }, 1000); // 1 second
    }
  }


  return (
    <div className="App">
      <NavBar />
      
      {/* This is the Keyboard */}
      {showButton && !buttonClicked && 
        <button className="transparent-button" onClick={handleClick}>
           <Spline scene="https://prod.spline.design/9qjSbTIrw6UzUHwR/scene.splinecode" 
           onKeyDown={onKeyDown}
           />
        </button>
      }

      {/* This is the rocket scene */}
      {buttonClicked && loadingTransition &&
        <div className="game">
          <Spline scene="https://prod.spline.design/7BLVzUVtBDAh4mEk/scene.splinecode" />
        </div>
      }

      {/* This is the Astronaut Game */}
      {showHome &&
        <div className="game">
          <Spline scene="https://prod.spline.design/tPkXNLDbag8M7mDj/scene.splinecode" />
        </div>
      }
    </div>
  );
}
