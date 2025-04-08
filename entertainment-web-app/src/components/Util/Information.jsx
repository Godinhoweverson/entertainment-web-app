import categoryMovie from '../../../assets/icon-category-movie.svg';
import categoryTv from '../../../assets/icon-category-tv.svg';

export default function Information({year, category, rating, title}){
    return(
        <div id='trending-information' >
            <div className='trending-movie-information' style={{width: category === 'Movie' ? '46%' : '56%'}}>
                <div className='trending-information-item'>{year}</div>
                <div className='dot'>.</div>
                <div className='trending-information-item'>
                    {category === "Movie" 
                        ? <><img src={categoryMovie} alt='category movie' /> {category}</>
                        : <><img src={categoryTv} alt='category tv' /> {category}</>}
                </div>
                <div className='dot'>.</div>
                <div className='trending-information-item'>{rating}</div>
            </div>
            <div className='trending-movie-name'>{title}</div>
        </div>
    )
}