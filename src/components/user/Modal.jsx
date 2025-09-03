import { Link } from "react-router-dom";

export default function({onClose}){
    return (
        <div id="modal-box">
            <h1 className="modal-title">User not logged in</h1>
            <p>To access your profile, please log in your account first.</p>
            <div id='modal-btns'>
                <Link className="modal-btn-login" to="/login">Login</Link>
                <button className="modal-btn-signUp" onClick={onClose}>Cancel</button>
            </div>
        </div>
        
    )
}