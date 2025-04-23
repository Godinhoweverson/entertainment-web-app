import home from '../../../assets/icon-nav-home.svg'
import homeClicked from '../../../assets/icon-nav-home-white.svg'
import movies from '../../../assets/icon-nav-movies.svg'
import moviesClicked from '../../../assets/icon-category-movie.svg'
import bookmarkEmpty from '../../../assets/icon-nav-bookmark.svg'
import bookmarkFull from '../../../assets/icon-bookmark-full.svg'

import logo from '../../../assets/logo.svg'
import avatar from '../../../assets/image-avatar.png'

import categoryTv from '../../../assets/icon-nav-tv-series.svg'
import categoryTvWhite from '../../../assets/icon-category-tv.svg';
import { useDispatch } from 'react-redux'
import { categoryActions } from '../../store/categoriesSlice'
import { useState } from 'react';


export default function SideBar(){
    const dispatch = useDispatch();
    const [homeSelected, isHomeSelected] = useState(home);

    function handleChoice(category){
        dispatch(categoryActions.categoryChoice({category}));
        isHomeSelected(!homeClicked)
    }
    return(
        <aside id="sideBar">
            <nav id='navBar'>
                <div>
                    <img src={logo} alt="movies icon" />
                </div>
                <div id='iconSelection'>
                    <img src={homeSelected} alt="home icon" onClick={() => handleChoice(false)}/>
                    <img src={movies} alt="categories movies" onClick={() => handleChoice('Movie')} />
                    <img src={categoryTv} alt="tv series" onClick={() => handleChoice('TV Series')} />
                    <img src={bookmarkEmpty} alt="bookmark" onClick={() => handleChoice('bookmark')} />
                </div>
                <div id='profile'>
                    <img src={avatar} alt="" />
                </div>
            </nav>
        </aside>

    )
}