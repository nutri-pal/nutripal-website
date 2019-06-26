import React from 'react';
// import Button from 'react-bootstrap/Button'
// import logo from './logo.svg';
import './App.css';
import HeroSectionComponent from './hero-section-component'

function App() {
  return (
    <div className='App'>
        <ul className='nav-bar'>
            <li className='nav-item'>home</li>
            <li className='nav-item'>contact</li>
            <li className='nav-item'>about us</li>
        </ul>
        <HeroSectionComponent/>
    </div>
  );
}

export default App;
