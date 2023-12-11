// Page imports to enable React properties
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import image from './SadPika.png';

function  generateImageUrl(path){
    
    if(path){

    return `${path}/low.webp`;
    } else {

        return image

    }
  } // generateImageUrl() end 

function SearchResults(props){

    const params = useParams();

    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

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

       <div id="searchResultsPage">

        <h2>Results for "{params.query}"</h2>

        <div className="searchResultsContainer">

            

            {

                loading ? <p>Loading results...</p> :
                card.map(c =>
                    
                    <div key={c.id} className="searchResultsChild">

                        <h3 onClick={() => navigateTo(`/cards/${c.id}`)} className="link">{c.name}</h3>
                        <img src={generateImageUrl(c.image)} onClick={() => navigateTo(`/cards/${c.id}`)} className="link searchImg" alt="pokemon card" />

                    </div>    
                    
                    )

            }


        </div>
        </div>      

    )



}

export default SearchResults