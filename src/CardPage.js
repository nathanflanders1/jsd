// Page imports to enable React properties
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import image from './SadPika.png';

function CardPage(){

    function  generateImageUrl(path){
    
        if(path){
    
        return `${path}/high.webp`;
        } else {
    
            return image
    
        }
      } // generateImageUrl() end 

    const navigateTo = useNavigate();

    const params = useParams();

    // const navigateTo = useNavigate();

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        loadSearchResults(params.id);

    }, [params.id]);


    function loadSearchResults(id){

        axios.get(`https://api.tcgdex.net/v2/en/cards/${id}`)
        .then(function(res){

            console.log(`CardPage axios response: `, res.data);
            setCard(res.data);
            setLoading(false);

        })
        .catch(err => {

            console.warn(`Error loading search results`, err);
            setError(err);
            setLoading(false);

        })


    }

    if(error !== null){

        return <strong>There was a problem loading results, please try again.</strong>

    }

    return(

        <div>

            {

                loading ? <p>Loading results...</p> :
                
                    
                    <div id="cardPageContainer">
                        <h3>{card.name}</h3>
                       <div className="cardContainer"> 
                        <div className="child">
                            <img src={`${generateImageUrl(card.image)}`} className="cardImg" alt="Card" />
                        </div> 

                        <div className="detailsText">
                            <p>Rarity: {card.rarity}</p>
                            <p>Illustrator: {card.illustrator}</p>
                            <p>Set: {card.set.name}</p>
                            <p>Number: {card.localId} / {card.set.cardCount.official}</p>
                            
                            
                       </div> 
                        </div> 

                    </div>   
              
                    
            }


        </div>

    )

}

export default CardPage