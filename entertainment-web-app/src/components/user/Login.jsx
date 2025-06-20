import { Link } from "react-router-dom";

import logo from '../../../public/logo.svg'

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
                    <input type="email" placeholder="Email address" className="custum-input"/>
                    <input type="password" placeholder="Password" className="custum-input"/>
                    <button>Login to your account</button>
                    <p>Don't have an account?<Link to="/signup">Sign up</Link></p>
                </form>
            </div>
            {/* <button> <Link to="/">Home</Link></button>
            <button> <Link to="/signup">Sign up</Link></button> */}
        </section>
   
    )
}