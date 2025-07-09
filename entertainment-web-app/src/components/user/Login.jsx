import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from '../../assets/icons/logo.svg'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        }catch(error){
            alert(error.message);
        }
    };

    return(
      
        <section id="login">
            <div id="icon">
                <Link to="/login">
                    <img src={logo} alt="movies icon" />
                </Link>
             </div>
            <div id="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn-form">Login to your account</button>
                    <p>Don't have an account?<Link to="/signup" className="link-paragraph">Sign up</Link></p>
                </form>
            </div>
        </section>
   
    )
}