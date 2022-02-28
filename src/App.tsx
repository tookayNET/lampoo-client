import './App.css';
import './components/styles/stylesheet.css';
import React from 'react';
import Topbar from './components/Topbar/Topbar'
import Navbar from './components/Navbar/Navbar'
import Offers from './components/Offers/Offers';
import Wishlist from './components/Wishlist/Wishlist';


function App() {
  return (
    <div>
      <div className="header">
        <Topbar />
        <Navbar />
      </div>
        <Offers />
      <div className="main">
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
