import Information from "../Util/Information";
import { useState } from "react";
import Button  from '../Util/Button.jsx';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';

export default function ContentItems({item}){
    const [btnPlayActive, setBtnPlayActive] = useState(false);

    function handleMouseOver(title){
        setBtnPlayActive(title) ;
    }

    function handleMouseOut(){
        setBtnPlayActive(false);
    }
    return(
        <div id='content-item' key={item.title+item.category} onMouseOver={()=>handleMouseOver(item.title)} onMouseOut={handleMouseOut}>     
            <div id='content'>
                <div id='image-bookmark'>
                    <img  src={bookmarkEmpty} alt="Bookmark" />
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