import DATA from '../../data.json';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import Information from '../Util/Information';
import  Button from '../Util/Button.jsx'

import { useState } from 'react';

export default function Trending(){
    const [btnPlayActive, setBtnPlayActive] = useState(false);

    return(
        <div id='trending-scroller'>
            <div id='trending-group'>
                {DATA.map((movie) =>(
                    movie.isTrending ? (
                        <div
                         className='trending-item'
                         key={movie.title}
                           onMouseEnter={() => setBtnPlayActive(true)}
                           onMouseLeave={() => setBtnPlayActive(false)}>
                            <img src={movie.thumbnail.trending.large} alt={movie.title} />
                            <div id='trending-subImg'>
                                <div className='trending-bookmark'>
                                    <div className='circle-trending-bookmark'>
                                        <img src={bookmarkEmpty} alt="Bookmark" />
                                    </div>
                                </div>
                                <Button hoover={btnPlayActive}/>
                                <Information year={movie.year} category={movie.category} rating={movie.rating} title={movie.title}/>
                            </div>
                        </div> ):
                        null
                ))}
            </div>
           
        </div>
    )
   
}