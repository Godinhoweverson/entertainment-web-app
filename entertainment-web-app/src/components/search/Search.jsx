import searchIcon from '../../assets/icon-search.svg';

export default function Search(){
    return(
        <section id="search-box">
            <img src={searchIcon} alt="search icon" id='search-icon' />
            <input type="text" name='search' placeholder="Search for movies or TV series" id='searchInput' />
        </section>
    )
}