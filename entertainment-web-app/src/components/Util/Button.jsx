import player from '../../../assets/icon-play.svg';

export default function Button({hoover}){
    return(
        <p id='btnPlayer-container'style={{diplay: hoover ? 'flex' : 'none'}}>
            <button id='btnPlayer'>
                <img src={player} alt="Movie player" />
                <p>Play</p>
            </button>
        </p>      
    )
}