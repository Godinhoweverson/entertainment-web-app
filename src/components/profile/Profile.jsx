import girl from '../../assets/Images/girl.jpg?inline';
import back from '../../assets/Images/close.svg';
import Logout from '../user/Logout';

export default function Profile(){




    return(
        <section id="profile-page">
            <div id="profile-popUp">
                <div className=''></div>
                <p className='close'>
                    <img src={back} alt="Close the pop up" />
                </p>
                <p className="email-popup">email@email.com</p>
            <div className="profile-image">
                <img src={girl} alt="User image" />
            </div>
            <div id="user-details">
                <h1>Carlos</h1>
            </div>
            <div id="btns-logout">
                <button className='manage-account'>Manage your account</button>
                <button className='logOut' onClick={Logout}>Log out</button>
            </div> 
            </div>      
        </section>
    )
}