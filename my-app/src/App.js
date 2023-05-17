import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import NavBar from './NavBar/NavBar';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-main">
        <Spline scene="https://prod.spline.design/Z9vReQa5Z8pP47z5/scene.splinecode" />
      </div>
      <header className="App-header">
        <h1>Welcome to My Personal Portfolio</h1>
      </header>
      <main className="App-main">
        <p>This is a placeholder for some cool feature. You can replace this later!</p>
      </main>
    </div>
  );
}
