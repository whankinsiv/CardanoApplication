import './App.css';
import React, { useState } from 'react';
import {
  Footer,
  Navbar
} from './containers';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Home from "./pages/Home"
import Propose from "./pages/Propose"
import Accept from "./pages/Accept"
import History from "./pages/History"
import { WalletHandler } from './components/pagecomps/WalletHandler';

const WalletState = new WalletHandler()
export function getWalletState() {
  return WalletState
}

/* Does it show */

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Navbar'>
          <Navbar />
        </div>
        <div className="gradient__bg">
          <div className="routes_container">
            <div className="MainContent">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propose" element={<Propose />} />
                <Route path="/accept" element={<Accept />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </div >
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </Router >
  );
}

export default App;
