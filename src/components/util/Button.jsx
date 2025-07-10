import player from '../../assets/Images/icon-play.svg';

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