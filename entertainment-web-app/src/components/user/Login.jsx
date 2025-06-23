import { Link } from "react-router-dom";

import logo from '../../public/logo.svg'

export default function Login(){
    return(
      
        <section id="login">
            <div id="icon">
                <Link to="/login">
                    <img src={logo} alt="movies icon" />
                </Link>
             </div>
            <div id="login-container">
                <h1>Login</h1>
                <form action="">
                    <input type="email" placeholder="Email address" className="custum-input" required/>
                    <input type="password" placeholder="Password" className="custum-input" required/>
                    <button className="btn-form">Login to your account</button>
                    <p>Don't have an account?<Link to="/signup" className="link-paragraph">Sign up</Link></p>
                </form>
            </div>
        </section>
   
    )
}