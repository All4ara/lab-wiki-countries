import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import CountriesList from './components/CountriesList.js'

function App() {
  return (
    <>
      <Navbar/>
      <CountriesList/>
    </>
  );
}

export default App;
