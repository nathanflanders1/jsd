import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

function  generateImageUrl(path){
    
    if(path !== null){

    return `${path}/low.webp`;
    }
  } // generateImageUrl() end 

function SearchResults(props){

    const params = useParams();

    const navigateTo = useNavigate();

    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        loadSearchResults(params.query);

    }, [params.query]);


    function loadSearchResults(query){

        axios.get(`https://api.tcgdex.net/v2/en/cards?name=${query}`)
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

            <h2>Results for "{params.query}"</h2>

            {

                loading ? <p>Loading results...</p> :
                card.map(c =>
                    
                    <div>

                        <h3 onClick={() => navigateTo(`/cards/${c.id}`)} className="link">{c.name}</h3>
                        <img src={generateImageUrl(c.image)} onClick={() => navigateTo(`/cards/${c.id}`)} className="link" />

                    </div>    
                    
                    )

            }


        </div>

    )



}

export default SearchResults