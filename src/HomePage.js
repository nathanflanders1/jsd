// // Page imports to enable React properties
import {useNavigate} from 'react-router-dom';

function HomePage(){

    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

    return(
    
        <div id="homepageDiv">

            <h2>Welcome to Nathan's Pokemon TCG DB!</h2>
            <div>

                <img src="https://assets.tcgdex.net/en/base/base1/logo.webp" id="homepageHeroImg"></img>

            </div>
            <p>Here you can search by name or by set for any card released since the game's debut back in 1999!</p>
            

            <div id="homepageImgContainer">
                <img src="https://assets.tcgdex.net/en/base/base1/4/high.webp" alt="charizard card image" onClick={() => navigateTo(`/cards/base1-4`)} className="link homepageImg" />
                <img src="https://assets.tcgdex.net/en/base/base1/2/high.webp" alt="blastoise card image" onClick={() => navigateTo(`/cards/base1-2`)} className="link homepageImg" />
                <img src="https://assets.tcgdex.net/en/base/base1/15/high.webp" alt="venusaur card image" onClick={() => navigateTo(`/cards/base1-15`)} className="link homepageImg" />
            </div>
        
        </div>
        
  
) // return end

} // HomePage() end

export default HomePage