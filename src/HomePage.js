import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

function HomePage(){

    const navigateTo = useNavigate();

    return(
    
        <div>

            <h2>Welcome to Nathan's Pokemon TCG DB!</h2>
            <p>Here you can search by name for a card from all sets and promotions since the game's release back in 1999</p>

       
            <img src="https://assets.tcgdex.net/en/base/base1/4/low.webp" alt="charizard card image" onClick={() => navigateTo(`/cards/base1-4`)} />
            <img src="https://assets.tcgdex.net/en/base/base1/2/low.webp" alt="blastoise card image" onClick={() => navigateTo(`/cards/base1-2`)} />
            <img src="https://assets.tcgdex.net/en/base/base1/15/low.webp" alt="venusaur card image" onClick={() => navigateTo(`/cards/base1-15`)} />
            
            
        </div>
        
  
) // return end

} // HomePage() end

export default HomePage