import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

function  generateImageUrl(path){
    
    if(path !== null){

    return `${path}/low.webp`;
    }
  } // generateImageUrl() end 

function CardPage(){


    const params = useParams();

    const navigateTo = useNavigate();

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        loadSearchResults(params.id);

    }, [params.id]);


    function loadSearchResults(id){

        axios.get(`https://api.tcgdex.net/v2/en/cards/${id}`)
        .then(function(res){

            console.log(`SearchResults axios response: `, res.data);
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
                    
                    <div>

                        <h3>{card.name}</h3>
                        
                        <img src={`${card.image}/high.webp`} width="380px" />
                
                    </div>    
                    
                    
                    
            }


        </div>

    )

}

export default CardPage