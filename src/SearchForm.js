// Page imports to enable React properties
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchForm(props){

    const [searchText, setSearchText] = useState(''); //sets initial state for searchText
    const navigateTo = useNavigate(); //function to utilise useNavigate() imported from react-router-dom

    function handleSubmit(ev){

        ev.preventDefault(); //prevent page from reloading when form is submitted

        navigateTo(`/search/${searchText}`); //callback to navigate to a searched page when form is submitted

    } //handleSubmit() end

    return(

        <>
        
        <form onSubmit ={handleSubmit}> 

            <input type="text" placeholder="Enter card name here" onChange={ev => setSearchText(ev.target.value)} />
            <button>Search</button>

        </form> {/* when form is submitted, the handleSubmit function runs, whenever text is typed into the search form the searchText useState is updated */}
        
        </>

    )

} // SearchForm() end

export default SearchForm 