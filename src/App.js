import React from 'react';
// import Button from 'react-bootstrap/Button'
// import logo from './logo.svg';
import './App.css';
import HeroSectionComponent from './components/hero-section-component'
import NavbarComponent from './components/navbar-component'

function App() {
  return (
    <div className='App'>
        <NavbarComponent/>
        <HeroSectionComponent/>
    </div>
  );
}

export default App;
