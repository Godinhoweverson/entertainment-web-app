import Items from '../items/Items.jsx';

export default function Trending(){
    
    return(
        <>
            <h1 id='heading-trending'>Trending</h1>
            <div id='trending-scroller'>
                <Items isTrending={true}/>
            </div>
        </>

    )
   
}