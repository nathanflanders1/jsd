import {useState} from 'react';
import{Route, Routes, HashRouter as Router, Link} from 'react-router-dom';
import HomePage from './HomePage.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';
import CardPage from './CardPage.js';


function PokeApp() {

  return (
   
    <div>

      <Router>
        <h1>Pokemon TCG DB</h1>
        <nav>

          <Link to="/">Home</Link>
  
          <SearchForm />

        </nav>

        <Routes>

          <Route path="/" exact element={<HomePage />} />

          <Route path="/cards/:id" element={<CardPage />} />

          <Route path="/search/:query" element={<SearchResults />} />

        </Routes>


      </Router>


    </div>

  );
}

export default PokeApp;
