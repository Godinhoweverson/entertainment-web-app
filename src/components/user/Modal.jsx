import ReactDom from 'react-dom'

export default function(){
    return ReactDom.createPortal(
        <div id="modal">
            <h1 className="modal-title">User Not Logged In</h1>
            <p>To access your profile, please log in or create an account first.</p>
            <button className="modal-btn">Login</button>
            <button className="modal-btn">Sign up</button>
        </div>,
        document.getElementById('modal-root')
    );
}