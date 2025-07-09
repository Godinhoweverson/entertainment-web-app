import searchIcon from '../../assets/icons/icon-search.svg';
import { useDispatch } from 'react-redux';
import {searchActions} from '../../store/searchSlice';

export default function Search(){
    const dispatch = useDispatch();

    function handleInput(event){
        let searchQuery = event.target.value;
        dispatch(searchActions.searchingContent({searchQuery}))
    }

    return(
        <section id="search-box">
            <img src={searchIcon} alt="search icon" id='search-icon' />
            <input type="text" name='search' placeholder="Search for movies or TV series" id='searchInput' onChange={handleInput} />
        </section>
    )
}