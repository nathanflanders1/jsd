// Page imports to enable React properties
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

function SetPage(props){

    const params = useParams();

    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

    const [sets, setSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        loadSetPage(params.setId);

    }, [/*loadSetPage(params.setId) */]);


    function loadSetPage(id){

        axios.get(`https://api.tcgdex.net/v2/en/sets/${id}`)
        .then(function(res){

            console.log(`SetPage axios response: `, res.data);
            setSets(res.data);
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

       <div id="setPagePage">

        <h2>{sets.name}</h2>
        <p>Release Date: {sets.releaseDate}</p>

        <div id="setPageContainer">

            

            {

                loading ? <p>Loading results...</p> :
                sets.cards.map(s =>
                    
                    <div key={s.id} id="setPageChild">

                        <p onClick={() => navigateTo(`/cards/${s.id}`)} className="link">{s.localId}. {s.name}</p>
                        <img src={`${s.image}/low.webp`} onClick={() => navigateTo(`/cards/${s.id}`)} className="link searchImg" alt="pokemon card"  />

                    </div>    
                    
                    )

            }


        </div>
        </div>      

    )



}

export default SetPage