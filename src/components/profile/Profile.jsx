import girl from '../../assets/Images/girl.jpg?inline';
import back from '../../assets/Images/close.svg';
import Logout from '../user/Logout';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../store/modal';

import { useState } from 'react';

export default function Profile(){
    const dispatch = useDispatch();

    const [modalClose, setModalClose] = useState();

    const modal = useSelector((state) => state.modal);

    function handleClose(){
        dispatch(modalAction.modalClose(false));
        setModalClose(modalClose)
    }
    
        console.log(modalClose)
    return(
        <section id="profile-page" style={{display: modalClose ? 'flex' : 'none'}}>
            <div id="profile-popUp">
                <p className='close' onClick={handleClose}>
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