import ContentItems from "./ContentItems";

export default function ContentItemsBookmark({item}){
    let movie = item.category === "Movie";
    let TvSeries = item.category === "TV Series";
    console.log(item)
    return(
        <> 
        <div>
            <div>   
                {movie ? <ContentItems item={item} /> : '' }
            </div>
            <div>
                {TvSeries ? <ContentItems item={item} /> : '' }
            </div>  
        </div>
        </>  
    )
}