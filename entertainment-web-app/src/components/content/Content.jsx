import DATA from '../../data.json';
import Information from '../Util/Information.jsx';
import Button  from '../Util/Button.jsx';
import bookmarkEmpty from '../../../assets/icon-bookmark-empty.svg';

import { useState } from 'react';

export default function Content(){

    const [btnPlayActive, setBtnPlayActive] = useState(false);

    function handleMouseOver(title){
        setBtnPlayActive(title) ;
    }

    function handleMouseOut(){
        setBtnPlayActive(false);
    }
    return (
        <>
           <h1 id='heading-trending'>Recommended for you</h1>
            <section id="content-group">
                {DATA.map((item) =>(
                    !item.isTrending ? (
                        <div id='content-item' key={item.title} onMouseOver={()=>handleMouseOver(item.title)} onMouseOut={handleMouseOut}>     
                            <div id='content'>
                                {/* {btnPlayActive === item.title && <Button hoover={btnPlayActive}/>}  */}
                                <div id='image-bookmark'>
                                    <img  src={bookmarkEmpty} alt="Bookmark" />
                                </div>
                                <div>
                                    <Button/>
                                {/* {btnPlayActive === item.title && <Button hoover={btnPlayActive} />} */}
                                    </div>
                                <img id='image-content' src={item.thumbnail.regular.large} alt={item.tite} />
                            </div>
                            <Information year={item.year} category={item.category} rating={item.rating} title={item.title} />
                           
                        </div>
                ) : null
                
                ))}
            </section>
        </>
     
    )
}