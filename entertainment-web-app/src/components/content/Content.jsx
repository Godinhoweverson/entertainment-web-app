import DATA from '../../data.json';
import { useSelector } from 'react-redux';
import ContentItems from './ContentItems.jsx';
import { useEffect, useState } from 'react';

export default function Content(){
    const categories = useSelector((state) => state.category.category);
    const bookmarked = useSelector((state) => state.bookMarks);
    const searchQuery = useSelector((state) => state.search.result);
  
    const [updateData, setUpdateData] = useState(searchQuery);

    let contentItem = [];

    useEffect(()=>{
        setUpdateData(searchQuery)
        contentItem = searchQuery.filter((item) => item.category)
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

 
    // let heading;

    // if(searchQuery.length === DATA.length){
    //     heading = <h1 id='heading-trending'>{!categories ? 'Recommended for you' : categories}</h1>
    // }else{
    //     heading = <h1 id='heading-trending'>{`Found ${searchQuery.length} results for ‘Earth’`}</h1>  
    // }
    let content;

    if(searchQuery.length === 0 ){
        content = DATA;
    }else{
        content = updateData;
    }

  


    return (
        <>  
            {searchQuery.length === DATA.length ? (
            <h1 id='heading-trending'>{!categories ? 'Recommended for you' : categories}</h1>
            ) : (
            <h1 id='heading-trending'>{`Found ${searchQuery.length} results for ‘Earth’`}</h1>
            )}
          
            <section id="content-group" key={bookmarked.title}  className={ content.length < 4 &&  content.length > 0 ? 'seachGridItem' : undefined }>
            {content.map((item) => 
                (!categories && <ContentItems item={item} />) ||
                (categories === item.category && categories !== 'bookmark' && <ContentItems item={item} />) ||
                (categories === 'bookmark' && item.isBookmarked && <ContentItems item={item} />)
            )}
            </section>
        </>
     
    )
}