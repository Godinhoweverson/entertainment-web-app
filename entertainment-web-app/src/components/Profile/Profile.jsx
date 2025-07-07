import profileImg from '../../public/profile.svg'


export default function Profile(){
    return(
        <section id="profile-page">
            <div id="profile-popUp">
                <p className="email-popup">email@email.com</p>
            <div id="profile-image">
            <img src={profileImg} alt="User image" />
            </div>
            <div id="user-details">
                <h1>Name</h1>
            </div>
            <div id="btns-logout">
                <button>Manage your account</button>
                <button>Log out</button>
            </div> 
            </div>      
        </section>
    )
}