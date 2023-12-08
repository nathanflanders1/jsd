// // Page imports to enable React properties
import {useNavigate} from 'react-router-dom';

function HomePage(){

    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

    return(
    
        <div>

            <h2>Welcome to Nathan's Pokemon TCG DB!</h2>
            <p>Here you can search by name for a card from all sets and promotions since the game's release back in 1999!</p>

        <div id="homepageImgContainer">
            <img src="https://assets.tcgdex.net/en/base/base1/4/low.webp" alt="charizard card image" onClick={() => navigateTo(`/cards/base1-4`)} className="link" />
            <img src="https://assets.tcgdex.net/en/base/base1/2/low.webp" alt="blastoise card image" onClick={() => navigateTo(`/cards/base1-2`)} className="link" />
            <img src="https://assets.tcgdex.net/en/base/base1/15/low.webp" alt="venusaur card image" onClick={() => navigateTo(`/cards/base1-15`)} className="link" />
        </div>
            
        </div>
        
  
) // return end

} // HomePage() end

export default HomePage