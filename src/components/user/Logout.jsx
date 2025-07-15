import { auth } from '../../firebase';
import { signOut } from "firebase/auth";
import { modalAction } from '../../store/modal';


export default function handleLogout(dispatch){
   
    console.log('logOut')
    signOut(auth)
    .then(()=>{
        console.log('Signed out successfully');
        dispatch(modalAction.closeModal());     
    })
    .catch((error)=>{
        console.log('Error signing out',error);
    })
}
