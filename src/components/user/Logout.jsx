import { auth } from '../../firebase';
import { signOut } from "firebase/auth";
export default function Logout(){
        
    function handleLogout(){
        signOut(auth)
        .then(()=>{
            console.log('Signed out successfully');
            navigate('/');
        })
        .catch((error)=>{
            console.log('Error signing out',error);
        })
    }
    return handleLogout
}