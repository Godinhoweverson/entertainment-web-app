import home from '../../assets/icon-nav-home.svg'
import movies from '../../assets/icon-nav-movies.svg'
import bookmarkEmpty from '../../assets/icon-nav-bookmark.svg'
import logo from '../../assets/logo.svg'
import tvSeries from '../../assets/icon-nav-tv-series.svg'
import avatar from '../../assets/image-avatar.png'
export default function SideBar(){
    return(
        <aside id="sideBar">
            <nav id='navBar'>
                <div>
                    <img src={logo} alt="movies icon" />
                </div>
                <div id='iconSelection'>
                    <img src={home} alt="home icon" />
                    <img src={movies} alt="categories movies" />
                    <img src={tvSeries} alt="tv series" />
                    <img src={bookmarkEmpty} alt="bookmark" />
                </div>
                <div id='profile'>
                    <img src={avatar} alt="" />
                </div>
            </nav>
        </aside>

    )
}