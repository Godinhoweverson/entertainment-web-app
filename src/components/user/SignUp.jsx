import { useState } from "react";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigate } from "react-router-dom";
import { createProfile } from '../../profileDB/profileDb';
import { Link } from "react-router-dom";

import logo from '../../assets/Images/logo.svg'

export default function SignUp(){
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password:'',
        address:'',
        country:'',
        photoURL:null
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if(name === 'photofile'){
            setAccount((prev) =>({...prev, photofile: files[0]}));
        } else{
            setAccount((prev) => ({...prev, [name]:value}));
        }
    };

    const handleSignUp= async (e) =>{
        e.preventDefault();
        try{

            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                account.email,
                account.password
            );
            const user = userCredential.user;

            createProfile({
                uid:user.uid,
                name:account.name,
                address:account.address,
                country: account.country,
            });

            alert('Sign up successful!')
            navigate('/')
           
        }catch(error){
            alert(error.message);
        };
    };

    return(
      
        <section id="login">
            <div id="icon">
                <Link to="/login">
                    <img src={logo} alt="movies icon" />
                </Link>
             </div>
            <div id="login-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="custum-input" 
                        required 
                        onChange={handleChange}
                        />
                         {/* <input 
                        type="file"
                        name="photoFile"
                        placeholder="Profile photo"
                        className="custum-input" 
                        required 
                        onChange={handleChange}
                        /> */}
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="custum-input" 
                        required 
                        onChange={handleChange}
                        />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password" 
                        className="custum-input" 
                        required
                        onChange={handleChange}
                        />
                    <input 
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="custum-input" 
                        required 
                        onChange={handleChange}
                        />
                           <input 
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="custum-input" 
                        required 
                        onChange={handleChange}
                        />
                    <button type="submit" className="btn-form">Sign Up</button>
                    <p>Already have an account?<Link to="/Login" className="link-paragraph">Login</Link></p>
                </form>
            </div>
        </section>
   
    )
}