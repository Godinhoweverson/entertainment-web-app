import ContentItems from "./ContentItems";

export default function ContentItemsBookmark({item,contentItem}){
    let movies = [];
    let series = [];

    if(item.length !== 0){
        item.map((items) =>{
            if("Movie" === items.category && items.isBookmarked){
                movies.push(items)
            }else if("TV Series" === items.category && items.isBookmarked){
                series.push(items)
            }

        })
    }
    console.log(movies.length, series)
    
    return(
        <>
        <section id="bookmark-display">
            <h1>Bookmarked Movies</h1>
           <div className={`bookmark-item ${movies.length < 4 && movies.length > 0 ? 'seachGridItem' : undefined}`}>
            { item.map((items)=>
                    ("Movie" === items.category && items.isBookmarked && <ContentItems key={items.title+items.category} item={items} />)
                )}
            </div>
            <h1>Bookmarked TV Series</h1>
            <div className={`bookmark-item ${series.length < 4 && series.length > 0 ? 'seachGridItem' : undefined}`}>
                    { item.map((items)=>
                    ("TV Series" === items.category && items.isBookmarked && <ContentItems key={items.title+items.category} item={items} />)
                )}
            </div>
        </section>
           
        </>  
    )
}