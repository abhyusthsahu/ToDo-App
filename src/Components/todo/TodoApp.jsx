import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username === "abhyusth" && password === "123456") {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    function SuccessMessageComponent() {
        if (showSuccessMessage) {
            return <div className="successMessage">Authenticated Successfully</div>
        }
            return null
    }

    function ErrorMessageComponent() {
        if (showErrorMessage) {
            return <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>
        }
            return null
    }

    const [username, setUsername] = useState("abhyusth");

    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    return (
        <div className="Login">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
            <div className="LoginForm">
                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div classsName="Welcome">
            Welcome Component
        </div>
    )
}