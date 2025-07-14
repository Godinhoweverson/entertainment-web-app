import homeInactive from '../../assets/Images/icon-nav-home.svg'
// import homeInactive from '../../public/icon-nav-home.svg'
import homeActive from '../../assets/Images/icon-nav-home-white.svg'
import moviesInactive from '../../assets/Images/icon-nav-movies.svg'
import moviesActive from '../../assets/Images/icon-category-movie.svg'
import bookmarkInactive from '../../assets/Images/icon-nav-bookmark.svg'
import bookmarkActive from '../../assets/Images/icon-bookmark-full.svg'
import seriesInactive from '../../assets/Images/icon-nav-tv-series.svg'
import seriesActive from '../../assets/Images/icon-category-tv.svg'
import profileImg from '../../assets/Images/profile.svg'
import logo from '../../assets/Images/logo.svg'

import { useDispatch } from 'react-redux'
import { categoryActions } from '../../store/categoriesSlice'
import { modalAction } from '../../store/modal'
import { useSelector } from 'react-redux'

import { useState } from 'react';

import { Link } from 'react-router-dom'

import Profile from '../profile/Profile'

export default function SideBar(){
    const dispatch = useDispatch();

    const [categoryChoice, isCategoryChoice] = useState('home');

    const modal = useSelector((state) => state.modal);

    function handleChoice(categoryActive, category){
        dispatch(categoryActions.categoryChoice({category}));
        isCategoryChoice(categoryActive);
    }

    function handleClose(){
        dispatch(modalAction.modalClose(true));
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
                <div id='profile' onClick={handleClose}> 
                    <img src={profileImg} alt="profile" />
                </div>
                <Profile/>
            </nav>
        </aside>

    )
}