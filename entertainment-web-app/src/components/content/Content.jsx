import DATA from '../../data.json';
import { useSelector } from 'react-redux';
import ContentItems from './ContentItems.jsx';
import { useEffect, useState } from 'react';

export default function Content(){
    const categories = useSelector((state) => state.category.category);
    const bookmarked = useSelector((state) => state.bookMarks);
    const searchQuery = useSelector((state) => state.search);
  
    const [updateData, setUpdateData] = useState(searchQuery);
    console.log(searchQuery.result)
    useEffect(()=>{
        setUpdateData(searchQuery)
    },[searchQuery])

    useEffect(() =>{
         setUpdateData(prevData => 
            prevData.map((item) =>(
                item.title === bookmarked.title
                ? {...item, isBookmarked : bookmarked.isBookmarked}
                : item
            ))
         );
    },[bookmarked.isBookmarked, bookmarked.title])
    console.log(searchQuery.length === DATA.length)
    return (
        <>  
            {searchQuery.length === DATA.length ? (
            <h1 id='heading-trending'>{!categories ? 'Recommended for you' : categories}</h1>
            ) : (
            <h1 id='heading-trending'>{`Found ${searchQuery.length} results for ‘Earth’`}</h1>
            )}
          
            <section id="content-group" key={bookmarked.title}  className={ searchQuery.length < 4? 'seachGridItem' : undefined }>
            {updateData.map((item) => 
                (!categories && <ContentItems item={item} />) ||
                (categories === item.category && categories !== 'bookmark' && <ContentItems item={item} />) ||
                (categories === 'bookmark' && item.isBookmarked && <ContentItems item={item} />)
            )}
            </section>
        </>
     
    )
}