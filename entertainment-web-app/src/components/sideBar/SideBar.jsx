import homeInactive from '../../../assets/icon-nav-home.svg'
import homeActive from '../../../assets/icon-nav-home-white.svg'
import moviesInactive from '../../../assets/icon-nav-movies.svg'
import moviesActive from '../../../assets/icon-category-movie.svg'
import bookmarkInactive from '../../../assets/icon-nav-bookmark.svg'
import bookmarkActive from '../../../assets/icon-bookmark-full.svg'
import seriesInactive from '../../../assets/icon-nav-tv-series.svg'
import seriesActive from '../../../assets/icon-category-tv.svg';

import logo from '../../../assets/logo.svg'
import avatar from '../../../assets/image-avatar.png'


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
                    <img src={categoryChoice === 'booknark' ? bookmarkActive : bookmarkInactive} alt="bookmark" onClick={() => handleChoice('boomark','bookmark')} />
                </div>
                <div id='profile'>
                    <img src={avatar} alt="" />
                </div>
            </nav>
        </aside>

    )
}