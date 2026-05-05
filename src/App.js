import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Addresses from './components/Addresses';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Addresses />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
