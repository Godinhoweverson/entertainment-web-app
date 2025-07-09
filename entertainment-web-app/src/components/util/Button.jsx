import player from '../../assets/icons/icon-play.svg';

export default function Button({hoover}){
    return(
        <div className="btnPlayer-container" style={{display: hoover ? 'flex' : 'none'}}>
            <button id="btnPlayer">
                <img src={player} alt="Movie player" />
                <p>Play</p>
            </button>
        </div>   
    )
}