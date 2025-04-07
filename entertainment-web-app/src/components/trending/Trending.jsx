import DATA from '../../data.json';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg'
import Button from '../Util/Button.jsx';
import Information from '../Util/Information.jsx'


import { useState } from 'react';

export default function Trending(){
    const [btnPlayActive, setBtnPlayActive] = useState(false);

    function handleMouseOver(){
        setBtnPlayActive(true) ;
    }

    function handleMouseOut(){
        setBtnPlayActive(false);
    }
    return(
        <>
            <h1 id='heading-trending'>Trending</h1>
            <div id='trending-scroller'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div id='trending-group'>
                        {DATA.map((item) => (
                            item.isTrending ? (
                            <div id='trending-item' key={item.title}>
                                <img src={item.thumbnail.trending.large} alt={item.title} />
                                <div id='trending-subImg'>
                                <div className='trending-bookmark'>
                                    <div className='circle-trending-bookmark'>
                                    <img src={bookmarkEmpty} alt="Bookmark" />
                                    </div>
                                </div>
                                <Button hoover={btnPlayActive} />
                                <Information year={item.year} category={item.category} rating={item.rating} title={item.title} />
                                </div>
                                
                            </div>
                            ) : null
                        ))}
                </div>  
            </div>
          
        </>

    )
   
}