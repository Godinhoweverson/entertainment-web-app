import DATA from '../../data.json';
import ContentItemsBookmark from './ContentItemsBookmark.jsx';
import ContentItems from './ContentItems.jsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Content(){
    const categories = useSelector((state) => state.category.category);
    const bookmarked = useSelector((state) => state.bookMarks);
    const searchQuery = useSelector((state) => state.search.result);
  
    const [updateData, setUpdateData] = useState(searchQuery);

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

    let contentItem = [];

    if(searchQuery.length !== 0 ){
        contentItem = updateData.filter((item) => item.category === categories || item.isBookmarked);
    }

    let heading;

    if(searchQuery.length === DATA.length){
        heading = <h1 id='heading-trending'>{!categories ? 'Recommended for you' : categories}</h1>
    }else{
        heading = <h1 id='heading-trending'>{`Found ${!contentItem.length ? searchQuery.length : contentItem.length} results for ‘Earth’`}</h1>  
    }

    console.log(contentItem.length)
    return (
        <> 
            {categories !== 'bookmark' && heading }
            <section id="content-group" className={contentItem.length < 4 &&  contentItem.length > 0 ? 'seachGridItem' : undefined }>
                {updateData.map((item) => 
                    (!categories && <ContentItems key={item.title+item.category} item={item} />) ||
                    (categories === item.category && categories !== 'bookmark' && <ContentItems key={item.title+item.category} item={item} />)
                    // (categories === 'bookmark' && item.isBookmarked && <ContentItemsBookmark key={item.title+item.category} item={item}/>)
                )}
                {categories === 'bookmark' && <ContentItemsBookmark item={updateData} contentItem={contentItem} />}
            </section>
        </>
     
    )
}