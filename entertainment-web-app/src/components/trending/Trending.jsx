import DATA from '../../data.json';

import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../../assets/icon-bookmark-full.svg';
import Button from '../Util/Button.jsx';
import Information from '../Util/Information.jsx'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bookmarkActions } from '../../store/categoriesSlice'

export default function Trending(){
    const categories = useSelector((state) => state.category.category);
    const bookmarked = useSelector((state) => state.bookMarks);
    const query = useSelector((state) => state.search.query);

    const [btnPlayActive, setBtnPlayActive] = useState(false);
    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState(DATA);

    useEffect(() =>{
         setUpdateData(prevData => 
            prevData.map((item) =>(
                item.title === bookmarked.title
                ? {...item, isBookmarked : bookmarked.isBookmarked}
                : item
            ))
         );
    },[bookmarked.isBookmarked, bookmarked.title])

    function handleMouseOver(title){
        setBtnPlayActive(title) ;
    }

    function handleMouseOut(){
        setBtnPlayActive(false);
    }

    function handleBookmark(title, isBookmarked){
        dispatch(bookmarkActions.isBookmarked({isBookmarked}));
        dispatch(bookmarkActions.handleTitle({title}));
    }
    

    return(
        <section id='trending' style={{display:categories || query ? 'none' : null}}>
            <h1 id='heading-trending'>Trending</h1>
            <div id='trending-scroller'>
                <div id='trending-group'>
                        {updateData.map((item) => (
                            item.isTrending ? (
                            <div id='trending-item' key={item.title} onMouseOver={()=>handleMouseOver(item.title)} onMouseOut={handleMouseOut}>
                                <img src={item.thumbnail.trending.large} alt={item.title} />
                                <div id='trending-subImg'>
                                    <div className='trending-bookmark'>
                                        <div className='circle-trending-bookmark' >
                                        <img src={item.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="Bookmark" onClick={() => handleBookmark(item.title, item.isBookmarked)}/>
                                        </div>
                                    </div>
                                    <div>
                                        {btnPlayActive === item.title && <Button hoover={btnPlayActive} />}
                                    </div>
                                    <Information year={item.year} category={item.category} rating={item.rating} title={item.title} />
                                </div>
                                
                            </div>
                            ) : null
                        ))}
                </div>  
            </div>
        </section>

    )
   
}