import homeInactive from '../../assets/icons/icon-nav-home.svg'
// import homeInactive from '../../public/icon-nav-home.svg'
import homeActive from '../../assets/icons/icon-nav-home-white.svg'
import moviesInactive from '../../assets/icons/icon-nav-movies.svg'
import moviesActive from '../../assets/icons/icon-category-movie.svg'
import bookmarkInactive from '../../assets/icons/icon-nav-bookmark.svg'
import bookmarkActive from '../../assets/icons/icon-bookmark-full.svg'
import seriesInactive from '../../assets/icons/icon-nav-tv-series.svg'
import seriesActive from '../../assets/icons/icon-category-tv.svg'
import profileImg from '../../assets/icons/profile.svg'
import logo from '../../assets/icons/logo.svg'

import { useDispatch } from 'react-redux'
import { categoryActions } from '../../store/categoriesSlice'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function SideBar(){
    const dispatch = useDispatch();
    const [categoryChoice, isCategoryChoice] = useState('home');

    function handleChoice(categoryActive, category){
        dispatch(categoryActions.categoryChoice({category}));
        isCategoryChoice(categoryActive);
    }

    return(
        <aside id="sideBar">
            <nav id='navBar'>
                <div>
                    <Link to="/login">
                        <img src={logo} alt="movies icon" />
                    </Link>
                </div>
                <div id='iconSelection'>
                    <img src={categoryChoice === 'home' ? homeActive : homeInactive} alt="home icon" onClick={() => handleChoice('home', false)}/>
                    <img src={categoryChoice === 'movie' ? moviesActive : moviesInactive} alt="categories movies" onClick={() => handleChoice('movie','Movie')} />
                    <img src={categoryChoice === 'serie' ? seriesActive : seriesInactive} alt="tv series" onClick={() => handleChoice('serie', 'TV Series')} />
                    <img src={categoryChoice === 'bookmark' ? bookmarkActive : bookmarkInactive} alt="bookmark" onClick={() => handleChoice('bookmark','bookmark')} />
                </div>
                <div id='profile'> 
                    <img src={profileImg} alt="profile" />
                </div>
            </nav>
        </aside>

    )
}