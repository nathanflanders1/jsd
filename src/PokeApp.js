// Page imports to enable React properties
import {useState} from 'react';
import{Route, Routes, HashRouter as Router, Link, useNavigate} from 'react-router-dom';
import HomePage from './HomePage.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';
import CardPage from './CardPage.js';
import About from './About.js';


function PokeApp() {

  return (
   
    <div>
        
      <Router>
        
        <nav className="navBar container">
          <div id="leftNavDiv">
            <h1>Nathan's Pokemon TCG DB</h1>
            <Link to="/">Home</Link>
            |
            <Link to="/about">About</Link>
            |
            <SearchForm />
          </div>

        </nav>

        <Routes>

          <Route path="/" exact element={<HomePage />} />

          <Route path="/cards/:id" element={<CardPage />} />

          <Route path="/search/:query" element={<SearchResults />} />

          <Route path="/about" element={<About />} />

        </Routes>


      </Router>


    </div>

  );
}

export default PokeApp;
