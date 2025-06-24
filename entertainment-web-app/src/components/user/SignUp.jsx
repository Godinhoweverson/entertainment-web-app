import { useState } from "react";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from '../../public/logo.svg'

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp= async (e) =>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
            navigate('/')
            alert('Sign up successful!')
        })
        .catch((error) => {
            alert(error.message);
        });
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
                        type="email"
                        placeholder="Email address"
                        className="custum-input" 
                        required 
                        onChange={(e) => setEmail(e.target.value)
                        }/>
                    <input
                        type="password"
                        placeholder="Password" 
                        className="custum-input" 
                        required
                        onChange={(e) => setPassword(e.target.value)
                        }/>
                    <button type="submit" className="btn-form">Sign Up</button>
                    <p>Already have an account?<Link to="/Login" className="link-paragraph">Login</Link></p>
                </form>
            </div>
        </section>
   
    )
}