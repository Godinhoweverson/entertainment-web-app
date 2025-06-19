import homeInactive from '../../../public/icon-nav-home.svg'
import homeActive from '../../../public/icon-nav-home-white.svg'
import moviesInactive from '../../../public/icon-nav-movies.svg'
import moviesActive from '../../../public/icon-category-movie.svg'
import bookmarkInactive from '../../../public/icon-nav-bookmark.svg'
import bookmarkActive from '../../../public/icon-bookmark-full.svg'
import seriesInactive from '../../../public/icon-nav-tv-series.svg'
import seriesActive from '../../../public/icon-category-tv.svg'

import logo from '../../../public/logo.svg'

import { useDispatch } from 'react-redux'
import { categoryActions } from '../../store/categoriesSlice'
import { useState } from 'react';


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
                    <img src={logo} alt="movies icon" />
                </div>
                <div id='iconSelection'>
                    <img src={categoryChoice === 'home' ? homeActive : homeInactive} alt="home icon" onClick={() => handleChoice('home', false)}/>
                    <img src={categoryChoice === 'movie' ? moviesActive : moviesInactive} alt="categories movies" onClick={() => handleChoice('movie','Movie')} />
                    <img src={categoryChoice === 'serie' ? seriesActive : seriesInactive} alt="tv series" onClick={() => handleChoice('serie', 'TV Series')} />
                    <img src={categoryChoice === 'bookmark' ? bookmarkActive : bookmarkInactive} alt="bookmark" onClick={() => handleChoice('bookmark','bookmark')} />
                </div>
                <div id='profile'>
                    <img src='../../../public/avatar.png' alt="profile" />
                </div>
            </nav>
        </aside>

    )
}