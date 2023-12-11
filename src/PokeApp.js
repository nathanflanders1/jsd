// Page imports to enable React properties
import{Route, Routes, HashRouter as Router, Link, useNavigate} from 'react-router-dom';
import HomePage from './HomePage.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';
import CardPage from './CardPage.js';
import About from './About.js';
import SetList from './SetList.js';
import SetPage from './SetPage.js';


function PokeApp() {

  return (
   
    <div>
        
      <Router>
        
        <nav id="nav">
          
          <div id="navDiv">
            <img src="https://assets.tcgdex.net/en/base/base1/logo.webp" className="navImg" alt="pokemon tcg logo"></img>
            <h1>Nathan's Pokemon TCG DB</h1>
            <img src="https://assets.tcgdex.net/en/base/base1/logo.webp" className="navImg" alt="pokemon tcg logo"></img>
          </div>
          <div id="navDiv2">  
            | 
            <Link to="/">Home</Link>
            | |
            <Link to="/sets">Sets</Link>
            | |
            <Link to="/about">About</Link>
            | 
          </div>
          
          <div id="navSearch">
            
              <SearchForm />
            </div>  

        </nav>

        <Routes>

          <Route path="/" exact element={<HomePage />} />

          <Route path="/cards/:id" element={<CardPage />} />

          <Route path="/search/:query" element={<SearchResults />} />

          <Route path="/about" element={<About />} />

          <Route path="/sets" element={<SetList />}/>

          <Route path="/sets/:setId" element={<SetPage />}/>

        </Routes>


      </Router>


    </div>

  );
}

export default PokeApp;
