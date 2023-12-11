// Page imports to enable React properties
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import image from './SadPika.png';

function  generateImageUrl(path){
    
    if(path){

    return `${path}.webp`;
    } else {

        return image

    }
  } // generateImageUrl() end 

function SetList(props){

    const params = useParams();

    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

    const [sets, setSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        loadSearchResults();

    }, []);


    function loadSearchResults(query){

        axios.get(`https://api.tcgdex.net/v2/en/sets`)
        .then(function(res){

            console.log(`SetList axios response: `, res.data);
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

       <div id="setListPage">

        <h2>Set List</h2>

        <div id="setListContainer">

            

            {

                loading ? <p>Loading results...</p> :
                sets.map(s =>
                    
                    <div key={s.id} className="setListChild">

                        <p onClick={() => navigateTo(`/sets/${s.id}`)} className="link">{s.name}</p>
                        <img src={`${generateImageUrl(s.logo)}`} onClick={() => navigateTo(`/sets/${s.id}`)} className="link setImg" alt="set logo" />
                    </div>    
                    
                    )

            }


        </div>
        </div>      

    )



}

export default SetList