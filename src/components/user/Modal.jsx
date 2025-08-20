import ReactDom from 'react-dom'

export default function(){
    return ReactDom.createPortal(
        <div id="modal">
            <h1 className="modal-title">User not logged in</h1>
            <p>To access your profile, please log in your account first.</p>
            <div id='modal-btns'>
                <button className="modal-btn-login">Login</button>
                <button className="modal-btn-signUp">Cancel</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}