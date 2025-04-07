import DATA from '../../data.json';
import Information from '../Util/Information.jsx';

export default function Content(){
    return (
        <>
           <h1 id='heading-trending'>Recommended for you</h1>
            <section id="content-group">
                {DATA.map((item) =>(
                    !item.isTrending ? (
                        <div id='content-item' key={item.title}>     
                            <div id='content' >
                                <img src={item.thumbnail.regular.large} alt={item.tite} />
                            </div>
                            <Information year={item.year} category={item.category} rating={item.rating} title={item.title} />   
                        </div>
                ) : null
                
                ))}
            </section>
        </>
     
    )
}