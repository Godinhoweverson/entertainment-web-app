import DATA from '../../data.json';
import { useState } from 'react';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg'

import Button from '../Util/Button.jsx';
import Information from '../Util/Information.jsx'

export default function Items({isTrending}){
    const [btnPlayActive, setBtnPlayActive] = useState(false);

    return(
        <>
        {/* <div id='trending-group'></div> :*/}
           <div id={isTrending ? 'trending-group':'item-group'}>
                    {DATA.map((item) =>(  
                            <div
                            id='items'
                            key={item.title}>
                                {item.isTrending ? 
                                    <img src={item.thumbnail.trending.large} alt={item.title} /> :
                                    <img src={item.thumbnail.regular.large} alt={item.title} />
                                }
                                <div id='trending-subImg'>
                                    <div className='trending-bookmark'>
                                        <div className='circle-trending-bookmark'>
                                            <img src={bookmarkEmpty} alt="Bookmark" />
                                        </div>
                                    </div>
                                    <Button hoover={btnPlayActive}/>
                                    <Information year={item.year} category={item.category} rating={item.rating} title={item.title}/>
                                </div>
                            </div> 
                    ))}
                </div>
        </>
    )
}