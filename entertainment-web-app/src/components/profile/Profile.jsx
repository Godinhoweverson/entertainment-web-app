import girl from '../../assets/icons/test.jpg';


export default function Profile(){
   console.log('test image path:', girl);
    return(
        <section id="profile-page">
            <div id="profile-popUp">
                <p className='close'>X</p>
                <p className="email-popup">email@email.com</p>
            <div className="profile-image">
                <img src={girl} alt="User image" />
            </div>
            <div id="user-details">
                <h1>@Carlos</h1>
            </div>
            <div id="btns-logout">
                <button className='manage-account'>Manage your account</button>
                <button className='logOut'>Log out</button>
            </div> 
            </div>      
        </section>
    )
}