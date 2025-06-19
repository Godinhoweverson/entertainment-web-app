import Information from "../Util/Information";
import { useState } from "react";

import Button  from '../Util/Button.jsx';
import bookmarkEmpty from '../../../public/icon-bookmark-empty.svg';
import bookmarkFull from '../../../public/icon-bookmark-full.svg';

import { useDispatch } from "react-redux";
import { bookmarkActions } from '../../store/categoriesSlice'

export default function ContentItems({item}){

    const [btnPlayActive, setBtnPlayActive] = useState(false);
    const dispatch = useDispatch();

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
        <div id='content-item' onMouseOver={()=>handleMouseOver(item.title)} onMouseOut={handleMouseOut}>     
            <div id='content'>
                <div id='image-bookmark'>
                    <img src={item.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="Bookmark" onClick={() => handleBookmark(item.title, item.isBookmarked)}/>
                </div>
                <div>
                    {btnPlayActive === item.title && <Button hoover={btnPlayActive} />}
                </div>
                <img id='image-content' src={item.thumbnail.regular.large} alt={item.title} />
            </div>
            <Information year={item.year} category={item.category} rating={item.rating} title={item.title} />                
        </div>
    )
}