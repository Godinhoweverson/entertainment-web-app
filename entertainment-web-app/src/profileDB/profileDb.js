import {doc, setDoc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const createUserProfile = async(user) => {

    if(!user || !user.id){
        console.error('Invalid user object',user);
        return;
    }

    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
        name: '',
        photoURL:'',
        email: user.email,
        address:'',
        country:''
    });
};

export const uploadProfileImage = async(file, uid) =>{
    const storage = getStorage();
    const storegeRef = ref(storage, `profileImage/${uid}`);
    await uploadBytes(storegeRef, file);
    const url = await getDownloadURL(storegeRef);
    return url;
}

export const updateUserProfile = async(uid, name, photoURL)=>{
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef,{name, photoURL});
};
