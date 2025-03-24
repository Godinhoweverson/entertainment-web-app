import DATA from '../../data.json';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import categoryMovie from '../../../assets/icon-category-movie.svg';
import categoryTv from '../../../assets/icon-category-tv.svg';

export default function Trending(){

    return(
        <div id='trending-scroller'>
            <div id='trending-group'>
                {DATA.map((movie) =>(
                    movie.isTrending ? (
                        <div className='trending-item' key={movie.title}>
                            <img src={movie.thumbnail.trending.large} alt={movie.title} />
                            <div id='trending-subImg'>
                                <div className='trending-bookmark'>
                                    <div className='circle-trending-bookmark'>
                                        <img src={bookmarkEmpty} alt="Bookmark" />
                                    </div>
                                </div>
                                <div id='trending-information'>
                                    <div className='trending-movie-information'>
                                        <div className='trending-information-item'>{movie.year}</div>
                                        <div className='trending-information-item'>
                                            {movie.category === "Movie" 
                                                ? <><img src={categoryMovie} alt='category movie' /> {movie.category}</>
                                                : <><img src={categoryTv} alt='category tv' /> {movie.category}</>}
                                        </div>
                                        <div className='trending-information-item'>{movie.rating}</div>
                                    </div>
                                    <div className='trending-movie-name'>{movie.title}</div>
                                </div>
                                
                            </div>
                        </div> ):
                        null
                ))}
            </div>
           
        </div>
    )
   
}