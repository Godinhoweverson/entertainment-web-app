import player from '../../../assets/icon-play.svg';

export default function Button({hoover}){
    return(
        // style={{display: hoover ? 'flex' : 'none'}}
        <p id='btnPlayer-container' >
            <button id='btnPlayer'>
                <img src={player} alt="Movie player" />
                <p>Play</p>
            </button>
        </p>      
    )
}