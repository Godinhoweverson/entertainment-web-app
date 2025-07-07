import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase'

export async function createProfile(user) {

  try {
    const docRef = await addDoc(collection(db, "profile"), {
        uid:user.uid,
        name:user.name,
        address:user.address,
        country: user.country,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


