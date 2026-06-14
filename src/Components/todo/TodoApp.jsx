import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginComponent />}></Route>
                <Route path="/login" element={<LoginComponent />}></Route>
                <Route path="/welcome" element={<WelcomeComponent />}></Route>
            </Routes>
            </BrowserRouter>
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
            navigate("/welcome");
        } else {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    const [username, setUsername] = useState("abhyusth");

    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
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
        <div className="Welcome">
            Welcome Component
        </div>
    )
}