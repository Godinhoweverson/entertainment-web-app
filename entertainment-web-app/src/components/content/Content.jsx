import DATA from '../../data.json';
import { useSelector } from 'react-redux';
import ContentItems from './ContentItems.jsx';

export default function Content(){
    const categories = useSelector((state) => state.category.category);
    const bookmarkedTitle = useSelector((state) => state.bookMarks.title);
    const bookmarked = useSelector((state) => state.bookMarks.isBookmarked);
    console.log(bookmarked, bookmarkedTitle)
    return (
        <>
           <h1 id='heading-trending'>{!categories ? 'Recommended for you' : categories}</h1>
            <section id="content-group">
                {DATA.map((items) =>(
                    !items.isTrending ? (
                        !categories ? (
                            <ContentItems item={items}/>
                        ) : categories === items.category ? (
                            <ContentItems item={items}/>   
                        ) : 
                        null       
                ) : null
                
                ))}
            </section>
        </>
     
    )
}