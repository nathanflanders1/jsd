import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchForm(props){

    const [searchText, setSearchText] = useState('');
    const navigateTo = useNavigate();

    function handleSubmit(ev){

        ev.preventDefault();

        navigateTo(`/search/${searchText}`);

    }

    return(

        <>
        
        <form onSubmit ={handleSubmit}>

            <input type="text" placeholder="Enter card name here" onChange={ev => setSearchText(ev.target.value)} />
            <button>Search</button>

        </form>
        
        </>

    )

} // SearchForm() end

export default SearchForm