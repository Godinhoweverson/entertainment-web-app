import DATA from '../../data.json';

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
                                    
                                </div>
                                <div className='trending-movie-information'>
                                    <div className='trending-information-item'>2</div>
                                    <div className='trending-information-item'>3</div>
                                    <div className='trending-information-item'>4</div>
                                    <div className='trending-movie-name'>5</div>
                                </div>
                            </div>
                        </div> ):
                        null
                ))}
            </div>
           
        </div>
    )
   
}